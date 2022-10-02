import React from 'react';

function PrintResponse({ data, title }) {
  return (
    <article className="relative z-50 rounded-lg bg-slate-200 text-lg font-bold">
      <div className="flex flex-wrap p-4">
        <h3 className="">
          {title}
          :::
        </h3>

        <pre className="pl-2">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </article>
  );
}
/* end of PrintResponse(data) */

export default PrintResponse;
