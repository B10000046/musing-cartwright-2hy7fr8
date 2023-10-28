import fetch from "node-fetch";
import "isomorphic-fetch";
(async () => {
  let url =
    "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-969F995B-6B1F-434B-A85C-D724B64FEEE6&locationName=%E9%9B%B2%E6%9E%97%E7%B8%A3";
  let response = await fetch(url);
  let data = await response.json();

  let { weatherElement } = data.records.location[0];
  let [Wx, PoP, MinT, CI, MaxT] = weatherElement.map((i) => {
    return i.time[0].parameter.parameterName;
  });
  console.log(Wx, PoP, MinT, CI, MaxT);
})();
