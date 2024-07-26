"use server";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { AutoTable } from "@/components/data-table/AutoTable";
import Pagination from "@/components/elements/Pagination";
import { FilterBrokers2 } from "./filter2";

async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      // address:"Address3"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      //address:"Address2"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      //address:"Address1"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      //address:"Address1"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      //address:"Address1"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      //address:"Address1"
    },
    // ...
  ];
}

export default async function BrokerPage() {
  const data = await getData();

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
                      <AutoTable data={data} />
                      <Pagination totalPages={15} />
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
