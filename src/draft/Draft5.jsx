import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

import apiHelper from '../utils/helpers';
import useInput from '../hooks/useInput';

import Store from '../images/Store.png';
import Area from '../images/Area.png';

const IMAGE = 'https://fakeimg.pl/400x300/';

function MapLeaflet() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [address, setAddress] = useState('');

  const [userPosition, setUserPosition] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      // console.log('GEO-Available');

      navigator.geolocation.getCurrentPosition(
        (position) => {
          // console.log(position);
          const { latitude, longitude } = position.coords;
          // console.log('Latitude is :', latitude);
          // console.log('Longitude is :', longitude);

          setUserPosition({ latitude, longitude });
        },
        (error) => {
          console.error('無法獲取地理位置:', error);
          console.error(`Error Code = ${error.code} - ${error.message}`);
        },
      );
    } else {
      console.error('瀏覽器不支援地理定位');
    }
  }, []);

  useEffect(() => {
    // console.log('userPosition?.latitude:', userPosition?.latitude);

    const latitude = userPosition?.latitude || 25.03418;
    const longitude = userPosition?.longitude || 121.564517;

    const mymap = L.map(mapRef.current).setView([latitude, longitude], 17);
    // const mymap = L.map(mapRef.current).setView([25.03418, 121.564517], 17);

    // 國土測繪中心 臺灣通用電子地圖
    const OSMUrl = 'https://wmts.nlsc.gov.tw/wmts/EMAP/default/GoogleMapsCompatible/{z}/{y}/{x}';

    // const OSMUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    L.tileLayer(OSMUrl).addTo(mymap);

    const greenIcon = new L.Icon({
      iconUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    const marker = L.marker([latitude, longitude], {
      icon: greenIcon,
      draggable: true,
    }).addTo(mymap);
    // const marker = L.marker([25.03418, 121.564517], {
    //   icon: greenIcon,
    //   draggable: true,
    // }).addTo(mymap);

    markerRef.current = marker;

    // 使用反向地理編碼取得地址
    const geocoder = L.Control.Geocoder.nominatim();

    const updateAddress = (latlng) => {
      // console.log('latlng', latlng);

      geocoder.reverse(
        latlng,
        mymap.options.crs.scale(mymap.getZoom()),
        (results) => {
          if (results.length > 0) {
            setAddress(results[0].name);
          }
        },
      );
    };

    geocoder.reverse(
      marker.getLatLng(),
      mymap.options.crs.scale(mymap.getZoom()),
      (results) => {
        if (results.length > 0) {
          const popupAddress = `<b>${results[0].name}</b><br>${results[0].html}`;
          marker.bindPopup(popupAddress).openPopup();

          const {
            country, city, suburb, road,
          } = results[0].properties.address;
          const reversedAddress = `${country} ${city} ${suburb} ${road}`;

          setAddress(reversedAddress);
          // updateAddress(reversedAddress);
          // console.log(results[0].name);
          // console.log('reversedAddress:::', reversedAddress);
          // console.log(results[0].properties);
        }
      },
    );

    marker.on('dragend', () => {
      const newLatLng = marker.getLatLng();
      geocoder.reverse(
        newLatLng,
        mymap.options.crs.scale(mymap.getZoom()),
        (results) => {
          if (results.length > 0) {
            marker
              .bindPopup(`<b>${results[0].name}</b><br>${results[0].html}`)
              .openPopup();
          }
        },
      );
    });

    const handleMarkerDragEnd = (e) => {
      const markerLatLng = e.target.getLatLng();
      updateAddress(markerLatLng);
    };

    marker.on('dragend', handleMarkerDragEnd);

    L.circle([25.03418, 121.564517], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 10,
    }).addTo(mymap);

    return () => {
      mymap.remove();
    };
  }, [userPosition]);

  return (
    <>
      <div id="mapid" className="h-full w-full" ref={mapRef} />
      {/* <div id="mapid" style={{ height: '100vh', width: '100vw' }} ref={mapRef} /> */}

      {/* <input
        type="text"
        value={address}
        className="my-2 block w-full rounded-sm border-2 border-[#DB8C8C] py-2 px-3"
        // onChange={(e) => setAddress(e.target.value)}
        onChange={(e) => setAddress(e.target.value)}
        // onChange={handleInputChange}
        placeholder="Enter address"
      /> */}
    </>
  );
}
// end of MapLeaflet()

function SummaryItem({ item, stateCount }) {
  const { ProductName, Amount, Price } = item;

  return (
    <li className="mb-6  md:mb-6">
      <section className="flex items-center justify-between">
        <h4 className="w-3/5">{ProductName}</h4>

        <div className="flex w-2/5 items-center justify-between">
          <p className="">{Amount}</p>
          {/* <p className="">{state.count}</p> */}

          {/* <p className="">{stateCount || Amount}</p> */}
          {/* <p className="justify-end">{Price * stateCount || Price * Amount}</p> */}
          <p className="justify-end">{Price * Amount}</p>
        </div>
      </section>
    </li>
  );
}
/* end of SummaryItem */

function CartSummary({
  data, payment, stateCount, Freight,
}) {
  const { shopId } = useParams();
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-8 rounded-2xl border-4 border-[#DB8C8C] p-10  lg:w-2/5">
      <h3 className="text-center  md:text-left">訂單內容</h3>

      <div className="hidden  md:flex md:items-center md:justify-between md:border-b-2 md:pb-1">
        <p className="w-3/5">品項</p>

        <div className="flex w-2/5 items-center justify-between">
          <p className="">數量</p>
          <p className="justify-end">金額</p>
        </div>
      </div>
      {/* end of RWD-PC-title */}

      <ul className="md:border-b-2 ">
        {/* #TODO: inject data from Server */}
        {data.map((item) => (
          // console.log('Summary');
          <SummaryItem key={item.Id} item={item} stateCount={stateCount} />
        ))}
      </ul>

      <div className="flex items-center justify-end gap-6">
        <p className="w-[48%] text-center">運費</p>

        <p className="">{data[0]?.Freight}</p>
      </div>

      <div className="flex items-center justify-end gap-6">
        <p className="w-[48%] text-center">總金額</p>

        <p className="">{payment}</p>
      </div>

      {/* <Link
        to={`/shops/${shopId}/checkout`}
        className="block rounded-sm bg-black py-2 text-center font-normal text-white"
      >
        CHECKOUT
      </Link> */}

      <button
        type="button"
        className="block rounded-sm bg-black py-2 text-center font-normal text-white"
        onClick={() => {
          // console.log('SUBMIT');

          // const Id = 27;
          const paymentId = 1;
          const deliveryId = 1;

          return apiHelper
            .checkoutCart({ Id: data[0].Id, paymentId, deliveryId })
            .then((res) => {
              // console.log(res);

              if (res?.data?.Status) {
                // #FIXME:
                // console.log('submitCart:::', res?.data);

                // const { Data, DetailList } = res.data;
                // console.log(DetailList[0]);
                // console.log(Data[0]);
                // setCateData(Data);
                navigate('/me/orders');
              }
            });
        }}
      >
        送出訂單
      </button>
    </section>
  );
}
/* end of CartSummary */

function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState('貨到付款');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        <h3 className="text-lg font-bold">付款方式</h3>
      </FormLabel>

      <div className="pl-2">
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="貨到付款"
            control={<Radio />}
            label="貨到付款"
          />
          <FormControlLabel value="信用卡" control={<Radio />} label="信用卡" />
          <FormControlLabel
            value="外帶自取"
            control={<Radio />}
            label="外帶自取"
          />
        </RadioGroup>
      </div>
    </FormControl>
  );
}

function SelectOtherProps() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl required sx={{ m: 1, minWidth: 500 }}>
        {/* <FormControl required sx={{ m: 1, minWidth: 500 }}> */}
        <InputLabel id="">送餐時間</InputLabel>

        <Select
          labelId=""
          // labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          // label="Age *"
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}

          <MenuItem value={10}>11:00</MenuItem>
          <MenuItem value={20}>12:00</MenuItem>
          <MenuItem value={30}>13:00</MenuItem>
          <MenuItem value={40}>14:00</MenuItem>
          <MenuItem value={50}>15:00</MenuItem>
          <MenuItem value={60}>16:00</MenuItem>
          <MenuItem value={70}>17:00</MenuItem>
          <MenuItem value={80}>18:00</MenuItem>
          <MenuItem value={90}>19:00</MenuItem>
          <MenuItem value={100}>20:00</MenuItem>
        </Select>

        {/* <FormHelperText>Required</FormHelperText> */}
      </FormControl>
    </div>
  );
}

// function SummaryItem() {
//   return (
//     <li className="mb-6  md:mb-6">
//       <section className="flex items-center justify-between">
//         <h4 className="w-3/5">TITLE</h4>

//         <div className="flex w-2/5 items-center justify-between">
//           <p className="">1</p>
//           <p className="justify-end">PRICE</p>
//         </div>
//       </section>
//     </li>
//   );
// }
// /* end of SummaryItem */

// function OrderSummaryList() {
//   return (
//     <section className="flex flex-col gap-10 rounded-2xl border-4 border-[#DB8C8C] p-10  lg:w-2/5">
//       <h3 className="text-center  md:text-left">訂單內容</h3>

//       <div className="hidden  md:flex md:items-center md:justify-between">
//         <p className="w-3/5">品項</p>

//         <div className="flex w-2/5 items-center justify-between">
//           <p className="">數量</p>
//           <p className="justify-end">金額</p>
//         </div>
//       </div>
//       {/* end of RWD-PC-title */}

//       <ul className="">
//         {/* #TODO: inject data from Server */}
//         <SummaryItem />
//         <SummaryItem />
//         <SummaryItem />
//       </ul>

//       <div className="flex items-center justify-between gap-6">
//         <p className="w-3/5 text-center">PAYMENT</p>

//         <p className="">$100</p>
//       </div>

//       <button
//         type="button"
//         className="rounded-sm bg-black py-2 font-normal text-white"
//       >
//         CHECKOUT
//       </button>
//     </section>
//   );
// }
// /* end of OrderSummaryList */

function CheckoutDetail() {
  const [userData, setUserData] = useState(null);

  const userName = useInput('');
  const phoneNumber = useInput('');
  const address = useInput('');

  useEffect(() => {
    let isFetch = false;
    if (!userData) {
      apiHelper.userGetInfo().then((res) => {
        // console.log(res);

        if (res?.data.Status) {
          const {
            data: { Userdata: userInfo },
          } = res;
          // #REVIEW: destructure
          // console.log('userInfo-', userInfo);

          if (!isFetch) {
            setUserData(userInfo);
            const { Name, MobilePhone, Address } = userInfo;
            userName.setValue(Name);
            phoneNumber.setValue(MobilePhone);
            address.setValue(Address);
          }
          /* end of IF(!isFetch) */
        }
      });
    }

    return () => {
      setTimeout(() => {
        isFetch = true;
      }, 300);
      /* end of setTimeout() */
    };
  }, [userData]);

  if (!userData) {
    return <>LOADING...</>;
  }

  return (
    <div className="flex flex-col gap-10 rounded-2xl border-4 border-[#DB8C8C] p-10 font-bold  lg:w-[calc(66%_-_24px)]">
      <section className="">
        <h2 className="mb-6 text-2xl">送餐詳情</h2>
        <SelectOtherProps />

        {/* <label htmlFor="a" className="my-4 block w-full">
          送餐時間
          <input
            type="text"
            name="a"
            id=""
            className="border-1 my-1 block w-full rounded-sm border-[#DB8C8C] py-2 px-3"
            placeholder="string"
          />
          <span className="hidden text-xs">hint</span>
        </label> */}

        <label htmlFor="a" className="my-4 block w-full">
          提貨姓名
          <input
            type="text"
            name="a"
            id=""
            className="my-1 block w-full rounded-sm border-2 border-[#DB8C8C] py-2 px-3 outline-1"
            placeholder="string"
            value={userName.value}
            onChange={userName.onChange}
          />
          <span className="hidden text-xs">hint</span>
        </label>

        <label htmlFor="a" className="my-4 block w-full">
          連絡電話
          <input
            type="text"
            name="a"
            id=""
            className="my-1 block w-full rounded-sm border-2 border-[#DB8C8C] py-2 px-3"
            placeholder="string"
            value={phoneNumber.value}
            onChange={phoneNumber.onChange}
          />
          <span className="hidden text-xs">hint</span>
        </label>

        <label htmlFor="a" className="my-4 block w-full">
          地址
          <input
            type="text"
            name="a"
            id=""
            className="my-1 block w-full rounded-sm border-2 border-[#DB8C8C] py-2 px-3"
            placeholder="string"
            value={address.value}
            onChange={address.onChange}
          />
          <span className="hidden text-xs">hint</span>
        </label>

        <section className="h-72">
          <MapLeaflet />
        </section>

        {/* <p className="hidden  md:block">MAP</p> */}
        {/* end of RWD-PC tittle */}
        {/* <div>
          <picture className="relative block w-full pt-[100%] md:h-64 md:pt-[50%]">
            <img
              // src="https://picsum.photos/seed/picsum/200/300"
              src={IMAGE}
              alt="random_image"
              className="absolute left-0 top-0 h-full w-full object-cover object-center"
            />
          </picture>
        </div> */}
      </section>

      <section>
        {/* <h3 className="mb-6">付款方式</h3> */}

        <ControlledRadioButtonsGroup />

        {/* <ul className="flex flex-col gap-6">
          <li>
            <p>1</p>
          </li>
          <li>
            <p>1</p>
          </li>
          <li>
            <p>1</p>
          </li>
        </ul> */}
      </section>

      <section>
        <h3 className="mb-6">備註</h3>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="block h-16 w-full rounded-sm border-2 border-[#DB8C8C] py-2 px-3"
        />
      </section>
    </div>
  );
}
/* end of CheckoutDetail() */

function PageCheckout() {
  const { shopId } = useParams();
  const [cartData, setCartData] = useState([]);
  const [payment, setPayment] = useState(0);

  const fetchCart = () => apiHelper.getCart().then((res) => {
    // console.log(res);

    if (res?.data?.Status) {
      // console.log('getCart:::', res?.data);

      // const { Message } = res.data;
      const { Message, total } = res.data;
      // console.log('cart-ProductDetailId:', Message[0].ProductDetailId);
      setCartData(Message);
      setPayment(total);
    }
  });

  useEffect(() => {
    apiHelper.getCart().then((res) => {
      // console.log(res);

      if (res?.data?.Status) {
        // console.log('getCart:::', res?.data);

        // const { Message } = res.data;
        const { Message, total } = res.data;
        // console.log('cart:', Message[0].ProductDetailId);
        setCartData(Message);
        setPayment(total);
      }
    });
    // fetchCart();
  }, []);

  return (
    <div className="pe-container mx-auto my-20 px-1 md:p-0">
      <button
        type="button"
        className="m-2 hidden rounded bg-[#6AF] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
        onClick={fetchCart}
      >
        1-getCart
      </button>

      <div className="flex flex-col gap-6  lg:flex-row ">
        <CheckoutDetail />
        {/* {userData && <CheckoutDetail userData={userData} />} */}

        {/* <OrderSummaryList /> */}
        <CartSummary
          data={cartData}
          payment={payment}
          // stateCount={stateCount}
        />
      </div>
    </div>
  );
}
/* end of PageCheckout() */

// function PageShops() {
//   return (
//     <>
//       <SectionAreaSmall />
//       <StoreList />
//       <hr />
//     </>
//   );
// }
/* end of PageShops() */

// export default PageShops;

function Draft5() {
  return (
    <>
      <PageCheckout />
      <hr />
      <hr />
    </>
  );
}
/* end of Draft5() */

export default Draft5;
