import Keranjang from "./Keranjang";

type Menu = {
    Name: string;
}

export default function Header(props: Menu){
    return(
            <div className="shadow-black p-3.5 flex justify-between flex-row sticky top-0 z-10 bg-white">
                        <h1 className="text-2xl align-center font-medium">{props.Name}</h1>
                        <Keranjang />
            </div>
    );
}