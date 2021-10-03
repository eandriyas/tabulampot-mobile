import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Layout from '../components/layouts'
import TabulampotList from '../components/tabulampotList'
import ActivityList from '../components/activityList'
import { getAllTabulampot } from '../lib/tabulampots'

export const getServerSideProps = async () => {
  const data = await getAllTabulampot();

  return {
    props: {
      tabulampot: data
    }
  };
}

export default function Home({ tabulampot }) {
  let tabulampotData = {};
  let dataTabulampot = false;

  if (tabulampot.error) {
    tabulampotData = null
  } else {
    dataTabulampot = true;
    tabulampotData = tabulampot.tabulampot.data
  }

  return (
    <>
      <Layout>
        <div className="box-border h-40 w-full bg-green-600">
          <img src="https://source.unsplash.com/user/c_v_r" className=" object-cover w-full  h-40" />
        </div>

        <h2 className="w-full my-4 ml-2 font-bold text-white">Tabulampots</h2>
        <div className="box-border w-auto py-4 px-4 flex">
          {dataTabulampot ? (
            tabulampotData.map(({ id, nama }) => (
              <TabulampotList key={id} tabulampotName={nama}></TabulampotList>
            ))
          ) : null}
        </div>

        <h2 className="w-full my-2 ml-2 font-bold text-white">Recent Activity</h2>
        <div className="w-auto py-4 px-4 ">
          <ActivityList></ActivityList>
          <ActivityList></ActivityList>
          <ActivityList></ActivityList>
          <ActivityList></ActivityList>
          <ActivityList></ActivityList>
          <ActivityList></ActivityList>
          <ActivityList></ActivityList>
          <ActivityList></ActivityList>
          <div className="text-center  underline font-sans ">
            <Link href="/activity">
              <a className="text-sm text-white hover:text-gray-200">See all activity</a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}
