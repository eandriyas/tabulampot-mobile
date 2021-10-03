import Layout from "../../components/layouts"
import ActivityList from "../../components/activityList"

export default function Detail() {
    return (
        <Layout>
            <img src="https://source.unsplash.com/user/c_v_r" className="object-cover h-48 w-full shadow-lg hover:bg-blue-100" />
            <div className="mx-2 my-2 bg-white rounded shadow py-4 px-2">
                <h2 className="text-bold">Jambu Madu</h2>
                <p className="text-sm">Ditanam pada Jum'at, 20 Desember 2021</p>
            </div>
            <div className="mx-2 my-2">
                <h3 className="font-bold text-white my-4">Recent Activity</h3>
                <ActivityList></ActivityList>
                <ActivityList></ActivityList>
                <ActivityList></ActivityList>
                <ActivityList></ActivityList>
                <ActivityList></ActivityList>
            </div>
        </Layout>
    )
}