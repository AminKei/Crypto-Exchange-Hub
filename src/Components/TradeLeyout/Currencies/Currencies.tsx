import { useCurrencies } from "../../../Hooks/Currencies/useCurrencies";

const Currencies = () => {


    const { data, error ,isLoading } = useCurrencies();

    return ( 
        <div className="border border-l-0 border-gray-100 w-[15%] mt-[53px]">
            {
                data?.map((item) => (
                    <div className="flex justify-between items-center p-4 text-sm">
                        <img src={item.image} width={20} alt="" />
                        <p>{item.name}</p>
                        <p>{item.symbol}</p>
                        <p>${item.current_price}</p>
                    </div>
                ))
            }
            
        </div>
     );
}
 
export default Currencies;