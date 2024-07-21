import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/layout/Layout";
import Welcome from "@/components/homepage/Welcome";

export default function Home() {
  return (
    <>

            <Layout headerStyle={1} footerStyle={1}>
             <Welcome/>

            </Layout>
        </>
  );
}
