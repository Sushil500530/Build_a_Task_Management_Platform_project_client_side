import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Footer from "../../../pages/footer/Footer";

const Profile = () => {
    const { user } = useAuth();
    // console.log(user);
    const handleUpdate = (e) => {
        e.preventDefault();
        toast.error('something went wrong!')
    }
    return (
        <div>
            <figure className="w-full h-[35vh] relative">
                <img src="https://i.ibb.co/f93tX9p/360-F-176984023-8-I82q-QPm-Kn8-Tq-NAZXIYMCSiwcco-Ui-PBg.jpg" alt="cover-photo" className="w-full h-full" />
                <div className="absolute bottom-0 translate-x-1/2 translate-y-1/2 left-[15%] md:left-[35%] lg:left-[38%]">
                    <img src={user?.photoURL} alt="user-photo" className="w-48 h-auto rounded-full border-2 border-white" />
                </div>
            </figure>
            <div className="mt-32 p-5">
                <h1 className="text-2xl font-bold text-center"> Show Your Profile Details</h1>
                <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row gap-10 mt-8 w-full lg:w-2/3 mx-auto mb-8">
                    <div className="border border-primary w-full p-5">
                        <h1 className="text-xl font-bold">Name: <span className="text-[18px] font-semibold">{user?.displayName}</span></h1>
                        <h1 className="text-xl font-bold">Email: <span className="text-[18px] font-semibold">{user?.email}</span></h1>
                        <h1 className="text-xl font-bold">Email Verification: <span className="text-[18px] font-semibold">{user?.emailVerified === true ? 'True' : 'False'}</span></h1>
                        <h1 className="text-xl font-bold">Create Account Date: <span className="text-[18px] font-semibold">{user?.metadata?.creationTime?.slice(0, 17)}</span></h1>
                    </div>
                    <div className="border border-primary w-full p-5">
                        <form action="" onSubmit={handleUpdate}>
                            <h1 className="text-xl font-bold">Name*</h1>
                            <input type="text" placeholder="Type here" className="input mt-2 input-bordered input-primary w-full text-[18px] font-medium" defaultValue={user?.displayName} />
                            <h1 className="text-xl font-bold">Email*</h1>
                            <input type="text" placeholder="Type here" className="input mt-2 input-bordered input-primary w-full text-[18px] font-medium" defaultValue={user?.email} />
                            <h1 className="text-xl font-bold">Email Verification*</h1>
                            <input type="text" placeholder="Type here" className="input mt-2 input-bordered input-primary w-full text-[18px] font-medium" defaultValue={user?.emailVerified === true ? 'True' : 'False'} />
                            <h1 className="text-xl font-bold">Create Account Date*</h1>
                            <input type="text" placeholder="Type here" className="input mt-2 input-bordered input-primary w-full text-[18px] font-medium" defaultValue={user?.metadata?.creationTime?.slice(0, 17)} />
                            <button className="btn bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 text-white mt-5">Save And Changes</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;