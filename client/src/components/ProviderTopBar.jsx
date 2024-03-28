import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoLocation } from 'react-icons/io5'
import ImageViewer from './ImageViewer'
import Skeleton from './Skeleton';

function ProviderTopBar() {
    const [openBackground, setOpenBackground] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleOpen = () => {
        setOpenBackground(true);
    }
    const params = useParams();
    const _id = params._id
    const providers = useSelector((state) => state.provider?.allProviders);
    let provider = undefined
    if (providers && providers.length > 0)
        provider = providers.find((pr) => pr._id === _id)
    return (
        <>
            {provider && (
                <div className="lg:mx-8 border rounded-lg shadow-lg mb-2 bg-white hover:bg-gray-50 transition duration-300">
                    <div className="md:flex items-center justify-between gap-4 px-4 py-6">
                        <div className="md:w-1/3 lg:h-60 h-52 relative overflow-hidden">
                            {loading && <Skeleton width="100%" height="100%" />}
                            <img
                                src={provider.providerLogo}
                                onLoad={() => setLoading(false)}
                                className={`${loading ? 'hidden' : 'block'} object-cover w-70 m-auto h-full`}
                                alt="backgroundLogo"
                            />
                        </div>
                        <div className="md:w-2/3 px-4 py-2">
                            <h2 className="font-bold text-2xl text-gray-800 uppercase mb-2">{provider.name}</h2>
                            <p className="text-sm text-gray-600 mb-2">Cuisines: Veg, Non-Veg, Dinner, Lunch</p>
                            <p className="flex items-center text-sm text-gray-600 mb-2">
                                <span className="mr-2"><IoLocation /></span>
                                {provider.address}
                            </p>
                            <p className="flex items-center text-sm text-gray-600 mb-2">
                                <span className="mr-2 font-semibold">Contact Number:</span>
                                <span>+91 {provider.phoneNumber}</span>
                            </p>
                        </div>
                    </div>
                </div>
            )}


        </>
    )
}

export default ProviderTopBar