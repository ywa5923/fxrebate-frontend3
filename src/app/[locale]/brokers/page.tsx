"use server";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { AutoTable } from "@/components/data-table/AutoTable";
import Pagination from "@/components/elements/Pagination";
import { FilterBrokers2 } from "./filter2";
import { json } from "stream/consumers";

export default async function BrokerPage({
  searchParams,
  params: { locale },
}: {
  searchParams?: any;
  params?: any;
}) {
  const [data,totalPages] = await getBrokers(
    searchParams.columns,
    locale,
    searchParams.page,
    searchParams.sortBy,
    searchParams.sortOrder,
    searchParams
  );
 

  const [dynamicColumns,defaultLoadedColumns ]= await translateBrokerDynamicColumns(locale);
  const broker_ext_columns={regulators:'Regulators'}
  // const {
  //   filters,
  //   broker_static_columns,
  //   broker_ext_columns,
  // } = await translateBrokerPage(locale);
  let filter_options = await getFilters(locale);

 //console.log("filters",filter_options);
 //console.log("filtersfffffffffffffffffffffffff",dynamicColumns);

  const columns = {
   // ...broker_static_columns,
   ...defaultLoadedColumns,
  ...broker_ext_columns,
    ...dynamicColumns,
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div
            className="single-blog-area padding-top inner-font-1 inner-blog-1"
            id="home"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12 m-auto">
                  <div className="single-blog-contents">
                    <ul className="blog-tags">
                      <li className="p-1">
                        <Link href="#">Advertising disclosure</Link>{" "}
                      </li>
                      <li className="p-1">
                        <Link href="#">Risk investments</Link>{" "}
                      </li>
                    </ul>
                    <h2>Forex Broker Ratings & Reviews</h2>

                    <p>
                      Forex Broker Ratings & Reviews Reliable ratings based on
                      up to 6 importance-weighted categories including real
                      customer reviews from customers who have synced their live
                      trading account, as well as regulation strength, broker
                      popularity and web traffic, pricing, features & customer
                      support.
                    </p>

                    <div className="container mx-auto py-10">
                      <AutoTable
                        data={data}
                        columnNames={columns}
                        filters={filter_options}
                        defaultLoadedColumns={defaultLoadedColumns}
                      />
                      <Pagination totalPages={totalPages} />
                    </div>
                    <div className="theme-border" />
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="tags">
                          <ul>
                            <li>TAGS:</li>
                            <li>
                              <Link href="#">Healthcare</Link>
                            </li>
                            <li>
                              <Link href="#">Consult</Link>
                            </li>
                            <li>
                              <Link href="#">Exclusive</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="social social3 text-right social-share">
                          <ul>
                            <li>Share:</li>
                            <li>
                              <Link
                                data-bs-toggle="tooltip"
                                title="Linked in"
                                href="#"
                              >
                                <i className="fa-brands fa-linkedin-in" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                data-bs-toggle="tooltip"
                                title="Facebook"
                                href="#"
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                data-bs-toggle="tooltip"
                                title="Instagram"
                                href="#"
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                data-bs-toggle="tooltip"
                                title="TikTok"
                                href="#"
                              >
                                <i className="fa-brands fa-tiktok" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theme-comments-list">
                    <h3>2 Comments</h3>
                    <div className="comments-list">
                      <div className="single-commencts">
                        <div className="comments-img">
                          <img src="/assets/img/blog/comment.png" alt="" />
                        </div>
                        <div className="comments-heading">
                          <h4>Winston Churchill.</h4>
                          <Link href="#" className="reply-btn">
                            Reply
                          </Link>
                        </div>
                        <p>
                          From watching sunsets to seeing old photo albums,
                          Sakshi finds joy in little things. With a bachelor’s
                          degree in psychology, she writes helpful,
                          well-researched content on mental health and
                          wellbeing.
                        </p>
                      </div>
                      <div className="single-commencts">
                        <div className="comments-img">
                          <img src="/assets/img/blog/comment.png" alt="" />
                        </div>
                        <div className="comments-heading">
                          <h4>Winston Churchill.</h4>
                          <Link href="#" className="reply-btn">
                            Reply
                          </Link>
                        </div>
                        <p>
                          From watching sunsets to seeing old photo albums,
                          Sakshi finds joy in little things. With a bachelor’s
                          degree in psychology, she writes helpful,
                          well-researched content on mental health and
                          wellbeing.
                        </p>
                      </div>
                      <div className="single-commencts">
                        <div className="comments-img">
                          <img src="/assets/img/blog/comment.png" alt="" />
                        </div>
                        <div className="comments-heading">
                          <h4>Winston Churchill.</h4>
                          <Link href="#" className="reply-btn">
                            Reply
                          </Link>
                        </div>
                        <p>
                          From watching sunsets to seeing old photo albums,
                          Sakshi finds joy in little things. With a bachelor’s
                          degree in psychology, she writes helpful,
                          well-researched content on mental health and
                          wellbeing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="write-comments">
                    <h3>Leave a Comment</h3>
                    <div className="comment-form">
                      <form>
                        <div className="row">
                          <div className="col-lg-6">
                            <input type="text" placeholder="Name" />
                          </div>
                          <div className="col-lg-6">
                            <input type="email" placeholder="Email Address" />
                          </div>
                          <div className="col-lg-12">
                            <textarea
                              cols={30}
                              rows={10}
                              placeholder="Write a Comment"
                            />
                          </div>
                          <div className="col-12">
                            <button
                              type="submit"
                              className="theme-btn theme-btn-14"
                            >
                              Submit Comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
//scroll bug fixed https://github.com/shadcn-ui/ui/issues/1355

async function getBrokers(
  brokerColumns: string | null = null,
  locale: string,
  page: number = 1,
  sortBy?: string,
  sortOrder?: string,
  searchParams: any
) {
  //position_home,position_list,trading_fees,short_payment_options,trailing_stops
  let url = brokerColumns
    ? `http://localhost:8000/api/v1/brokers?language[eq]=${locale}&page=${page}&columns[in]=${brokerColumns}`
    : `http://localhost:8000/api/v1/brokers?language[eq]=${locale}&page=${page}`;

  let sortDirection = sortOrder === "asc" ? "+" : "-";
  if (sortBy && sortOrder)
    url = url + `&order_by[eq]=` + sortDirection + `${sortBy}`;

  if (searchParams.filter_offices) {
    url = url + `&filter_offices[in]=${searchParams.filter_offices}`;
  }
  if (searchParams.filter_headquarters) {
    url = url + `&filter_headquarters[in]=${searchParams.filter_headquarters}`;
  }
  if (searchParams.filter_min_deposit) {
    url = url + `&filter_min_deposit[lt]=${searchParams.filter_min_deposit}`;
  }
  if (searchParams.filter_withdrawal_methods) {
    url = url + `&filter_withdrawal_methods[in]=${searchParams.filter_withdrawal_methods}`;
  }
  if (searchParams.filter_group_trading_account_info) {
    url = url + `&filter_group_trading_account_info[in]=${searchParams.filter_group_trading_account_info}`;
  }
  //filter_group_fund_managers_features
  if (searchParams.filter_group_fund_managers_features) {
    url = url + `&filter_group_fund_managers_features[in]=${searchParams.filter_group_fund_managers_features}`;
  }

  if (searchParams.filter_group_spread_types) {
    url = url + `&filter_group_spread_types[in]=${searchParams.filter_group_spread_types}`;
  }

  if (searchParams.filter_account_currency) {
    url = url + `&filter_account_currency[in]=${searchParams.filter_account_currency}`;
  }
  if (searchParams.filter_trading_instruments) {
    url = url + `&filter_trading_instruments[in]=${searchParams.filter_trading_instruments}`;
  }
  if (searchParams.filter_support_options) {
    url = url + `&filter_support_options[in]=${searchParams.filter_support_options}`;
  }
  if (searchParams.filter_regulators) {
    url = url + `&filter_regulators[in]=${searchParams.filter_regulators}`;
  }
 url=url + '&zone[eq]=eu';

  console.log("url=========================", url);
  //`http://localhost:8000/api/v1/brokers?language[eq]=ro&page=1&columns[in]=position_home`+brokerColumns+
  // `&filters[in]=a,b,c,d`

  const res = await fetch(url, { cache: "no-store" });
  //short_payment_options,trading_fees,trailing_stops

  const brokers = await res.json();

  let selectedColumns = brokerColumns
    ? brokerColumns.split(",")
    : [
        "home_url",
        "user_rating",
        "account_type",
        "trading_name",
        "overall_rating",
        "support_options",
        "account_currencies",
        "trading_instruments",
      ];

      return [brokers.data,Math.ceil(brokers.meta.total/brokers.meta.per_page)];
  return brokers.data.map((broker: any) => {
    //remove dynamic_options_values from broker
    //const newBroker= {...broker,['dynamic_options_values']:null}
    const newBroker = (({ dynamic_options_values, ...o }) => o)(broker);
    // //add dynamic_options_values to broker as key:value pairs
    broker.dynamic_options_values.forEach((d: any) => {
      newBroker[d.option_slug] = d.value;
    });

    //add companiy's offices to broker

    //  let offices:string[]=[]
    //  let headquarters:string[]=[]
    //  broker.companies.forEach((company:any)=>{
    //   offices.push(company.offices)
    //   headquarters.push(company.headquarters)
    //   })

    if (broker.regulators) {
      let regulators: string[] = [];
      broker.regulators.forEach((regulator: any) => {
        regulators.push(regulator.abreviation + "-" + regulator.country);
        //regulators.push(regulator.abreviation)
      });
      //newBroker["regulators"]=regulators.join(", \n")
      newBroker["regulators"] = regulators.join("; ");
    }

    //   newBroker["offices"]=offices.join(",")
    //   newBroker["headquarters"]=headquarters.join(",")
    //   newBroker["regulators"]=regulators.join(",")

    //remove broker;s columns that are not in brokerColumns

    Object.keys(newBroker).forEach((key) => {
      if (!selectedColumns.includes(key)) {
        delete newBroker[key];
      }
    });

    return newBroker;
  });
}

async function translateBrokerDynamicColumns(locale: string) {
  let url = `http://localhost:8000/api/v1/broker_options?language[eq]=${locale}`;
  const res = await fetch(url, { cache: "no-store" });
  //short_payment_options,trading_fees,trailing_stops
  const brokerOptions = await res.json();
  //merge an array of objects into one
 // let mergedObjects = Object.assign({}, ...dynamicColumns.data);
  return [brokerOptions.options,brokerOptions.defaultLoadedOptions];
}

async function translateBrokerPage(locale: string) {
  let url = `http://localhost:8000/api/v1/translations?model[eq]=Broker&property[in]=page_brokers&lang[eq]=${locale}`;

  const res = await fetch(url, { cache: "no-store" });
  //short_payment_options,trading_fees,trailing_stops
  const serverResponse = await res.json();

  return JSON.parse(serverResponse.data[0].metadata);
}

async function getFilters(locale: string) {
  let url = `http://localhost:8000/api/v1/broker-filters?language[eq]=${locale}`;
  const res = await fetch(url, { cache: "no-store" });
  const filters = await res.json();

  return filters;
}
//backend tested with http://localhost:8000/api/v1/brokers?language[eq]=ro&page=1&columns[in]=trading_name,trading_fees,account_type,jurisdictions,promotion_title,fixed_spreads,support_options&order_by[eq]=+account_type
