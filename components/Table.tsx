import { CheckIcon, ComputerDesktopIcon, DeviceTabletIcon, PhoneIcon, TvIcon } from "@heroicons/react/24/solid";
import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
    products: Product[];
    selectedPlan: Product | null; 
}

function Table({products, selectedPlan}: Props) {
    return (
        <>
            <table>
            <tbody className="divide-y divide-[gray]">
                <tr className="tableRow">
                <td className="tableDataTitle">Monthly price</td>
                {products.map((product) => (
                    <td
                    className={`tableDataFeature ${
                        selectedPlan?.id === product.id
                        ? 'text-[#E50914]'
                        : 'text-[gray]'
                    }`}
                    key={product.id}
                    >
                    ${product.prices[0].unit_amount! / 100}
                    </td>
                ))}
                </tr>
                <tr className="tableRow">
                <td className="tableDataTitle">Video quality</td>
                {products.map((product) => (
                    <td
                    className={`tableDataFeature ${
                        selectedPlan?.id === product.id
                        ? 'text-[#E50914]'
                        : 'text-[gray]'
                    }`}
                    key={product.id}
                    >
                    {product.metadata.videoQuality}
                    </td>
                ))}
                </tr>
                <tr className="tableRow">
                <td className="tableDataTitle">Resolution</td>
                {products.map((product) => (
                    <td
                    className={`tableDataFeature ${
                        selectedPlan?.id === product.id
                        ? 'text-[#E50914]'
                        : 'text-[gray]'
                    }`}
                    key={product.id}
                    >
                    {product.metadata.resolution}
                    </td>
                ))}
                </tr>
                <tr className="tableRow flex items-start">
                <td className="tableDataTitle">
                    Watch on your TV, computer, mobile phone and tablet
                </td>
                {products.map((product) => (
                    <td
                    className={`tableDataFeature ${
                        selectedPlan?.id === product.id
                        ? 'text-[#E50914]'
                        : 'text-[gray]'
                    }`}
                    key={product.id}
                    > 
                    <div className="flex flex-col">
                        {product.metadata.phone === 'true' && (
                            <div className="deviceIconWrapper">
                                <PhoneIcon className="deviceIcon" />
                                <p className="deviceIconLabel">Phone</p>
                            </div>   
                        )}
                        {product.metadata.tablet === 'true' && (
                            <div className="deviceIconWrapper">
                                <DeviceTabletIcon className="deviceIcon" />
                                <p className="deviceIconLabel">Tablet</p>
                            </div>   
                        )}
                        {product.metadata.pc === 'true' && (
                            <div className="deviceIconWrapper">
                                <ComputerDesktopIcon className="deviceIcon" />
                                <p className="deviceIconLabel">PC</p>
                            </div>   
                        )}
                        {product.metadata.tv === 'true' && (
                            <div className="deviceIconWrapper">
                                <TvIcon className="deviceIcon" />
                                <p className="deviceIconLabel">TV</p>
                            </div>   
                        )}
                    </div>
                    </td>
                ))}
                </tr>
            </tbody>
            </table>
            <p className="notice">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device
             capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</p>
            <p className="notice">Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
        </>
      )
}

export default Table