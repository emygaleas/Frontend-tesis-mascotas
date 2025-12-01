import CardPassword from '../components/profile/CardPassword.jsx'
import { CardProfile } from '../components/profile/CardProfile.jsx'
import FormProfile from '../components/profile/FormProfile.jsx'

const Profile = () => {
    return (
        <>       
            <div>
                <h1 className="font-black text-4xl text-[#6B4F3A]">Perfil</h1>
                <hr className="border-[#E0D9D1] my-2" />
                <p className="mb-8 text-[#7A6A58]">
                    Actualiza tus datos en este módulo.
                </p>
            </div>

            <div className="flex justify-around gap-x-8 flex-wrap gap-y-8 md:flex-nowrap">

                <div className="w-full md:w-1/2">
                    <FormProfile />
                </div>

                <div className="w-full md:w-1/2">
                    <CardProfile />
                    <CardPassword />
                </div>

            </div>
        </>
    )
}

export default Profile
