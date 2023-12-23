import { MdDelete } from "react-icons/md";
import useFavorite from "../../components/hooks/useFavorite";
import Loading from "../../components/shared/Loading";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Container from "../../components/shared/Container";

const Favorite = () => {
    const axiosSecure = useAxiosSecure();
    const [favorite, refetch, isLoading] = useFavorite();
    // console.log(favorite);
    if (isLoading) {
        return <Loading />
    }
    const handleDelete = async (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/favorite/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }



    return (
        <Container>
            <h1 className="text-2xl font-bold text-center my-8">Your Favorite Task is Here........</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  p-5">
                {
                    favorite.length > 0 && favorite?.map(data =>
                        <div key={data?._id} className="card bg-base-100 shadow-xl">
                            <figure className="w-full h-80 rounded-xl">
                                <img src={data?.image} className=" rounded-xl hover:scale-110 transition-all w-full h-full cursor-pointer" alt="photo" />
                            </figure>
                            <div className="flex items-center p-5 justify-between">
                                <h1 className="text-xl font-bold">{data?.taskName}</h1>
                                <Link to={``}>
                                    <button onClick={() => handleDelete(`${data?._id}`)} className="btn bg-gradient-to-r from-blue-800 to-blue-950 text-white text-[18px] hover:text-red-500"><MdDelete className="w-8 h-8" /></button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                favorite.length <= 0 && <div className="w-full h-[50vh] flex items-center justify-center">
                    <h1 className="text-center text-2xl font-bold">Data Not Found....!</h1>
                </div>
            }
        </Container>
    );
};

export default Favorite;