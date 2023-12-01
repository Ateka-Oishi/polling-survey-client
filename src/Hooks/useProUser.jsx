import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useProUser = () => {
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: isProUser, isLoading: isProUserLoading } = useQuery({
      enabled: !loading,
      queryKey: ["isProUser", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/ProUser/${user?.email}`);

        return res.data.ProUser;
      },
    });
    // console.log(isProUser);
    return [isProUser, isProUserLoading];


}

export default useProUser;