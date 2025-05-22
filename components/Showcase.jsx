import { Card, CardContent } from "@/components/ui/card";

export default function Showcase() {
    const cardContents = [
        {
            gif: "/Authentic.gif",
            image: "/homescreen.png",
            content: [
                { type: "text", value: "login and take" },
                { type: "text", value: "yourself close to" },
                { type: "highlight", value: "AUTHENTICITY" }
            ]
        },
        {
            gif: "/Verified.gif",
            image: "/menu-page.png",
            content: [
                { type: "text", value: "meals prepared by" },
                { type: "highlight", value: "FSSAI REGISTERED" },
                { type: "text", value: "chefs at home" }
            ]
        },
        {
            gif: "/sand-timer.gif",
            image: "/orderdetails_screen.png",
            content: [
                { type: "row", value: ["prepared", { type: "highlight", value: "FRESH" }] },
                { type: "text", value: "& delivered in your" },
                { type: "highlight", value: "TIME-SLOT" }
            ]
        },
        {
            gif: "/cookie.gif",
            image: "/reward-page.png",
            content: [
                { type: "text", value: "collect cookies &" },
                { type: "text", value: "claim them for" },
                { type: "highlight", value: "REWARDS" }
            ]
        }
    ];

    return (
        <div className="flex flex-wrap justify-center md:justify-evenly gap-8 md:gap-4 p-6 bg-black">
            {cardContents.map((card, index) => (
                <div key={index} className="relative w-[240px] h-[650px] flex flex-col items-center mx-2 md:mx-4">
                    <Card 
                        className="absolute bg-white rounded-2xl shadow-md z-10 flex flex-col items-center"
                        style={{ top: '60px', width: '260px', height: '400px' }}
                    >
                        <CardContent className="h-full w-full px-2 pt-2 flex flex-col items-center">
                            <img
                                src={card.gif}
                                alt={`Card GIF ${index + 1}`}
                                className="w-12 h-12 object-contain -mt-2"
                            />
                            <div className="text-center mt-4 space-y-2 font-semibold text-sm">
                                {card.content.map((item, i) => {
                                    if (item.type === "highlight") {
                                        return (
                                            <div
                                                key={i}
                                                className="inline-block bg-[#aa3fdd] text-white px-2 py-1 rounded"
                                            >
                                                {item.value}
                                            </div>
                                        );
                                    } else if (item.type === "row") {
                                        return (
                                            <div key={i} className="flex justify-center items-center gap-1">
                                                {item.value.map((el, j) =>
                                                    typeof el === "string" ? (
                                                        <span key={j} className="text-black">{el}</span>
                                                    ) : (
                                                        <span
                                                            key={j}
                                                            className="bg-[#aa3fdd] text-white px-2 py-1 rounded"
                                                        >
                                                            {el.value}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <p key={i} className="text-black">{item.value}</p>
                                        );
                                    }
                                })}
                            </div>

                            <img
                                src={card.image}
                                alt={`Card Image ${index + 1}`}
                                className="mt-4 w-48 h-auto rounded-lg transition-transform duration-300 hover:scale-105"
                                style={{ transformOrigin: "center center" }}
                            />
                        </CardContent>
                    </Card>

                    <Card
                        className="w-full h-full mt-8 rounded-2xl shadow-lg transition-transform border-none"
                        style={{
                            background: "linear-gradient(to bottom, #a93fdd, #0c0510)",
                        }}
                    >
                        <CardContent className="h-full" />
                    </Card>
                </div>
            ))}
        </div>
    );
}