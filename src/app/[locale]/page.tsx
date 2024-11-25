import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/layout/Layout";
import Welcome from "@/components/homepage/Welcome";

import MyBox from "@/components/three-js/MyBox";
import MyCanvas from "@/components/three-js/MyCanvas";

import {Logo2} from "@/components/three-js/Logo2";
import {Logo4} from "@/components/three-js/Logo4";
import {Logo5} from "@/components/three-js/Logo5";

import {Logo3} from "@/components/three-js/Logo3";
export default function Home() {
  return (
    <>

            <Layout headerStyle={1} footerStyle={1}>
             <Welcome/>
            
            </Layout>
                  {/*<MyCanvas>
                  <Logo5 fbxPath="./logo_test_1c.fbx" texturePath="./sky.jpeg"/>
                  </MyCanvas>*/}
            
        </>
  );
}
