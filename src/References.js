import {ReferenceCard} from "./ReferenceCard";
import hira from "./logo/hira.png";
import sclogo from "./logo/sclogo.png";
import knightnw from "./logo/knightnw.png";
import React from "react";
import "./css/reference.css"

export function References() {
    return <div className="content">
        <div className="title">
            <h1>My References</h1>
        </div>
        <div className="text w-75 m-auto">
            <div className={"text-white m-2"}>

                <ReferenceCard
                    logo={hira}
                    title={"Diyar Erzen"}
                    description={"İşini tam zamanında ve en kaliteli şekilde yapan (bu zamana kadarki gördüğümüz tüm geliştiricilerden daha kaliteli), iş ahlakına sahip, uygun fiyatlar sunan saygılı veanlayışlı bir geliştirici ^^"}
                    sign={"~Diyar 'Eleftnen' Erzen"}
                />

                <ReferenceCard
                    logo={sclogo}
                    title={"Yavuz"}
                    description={"2018'de forumlarda tanıdığım, bir çok kişinin önerisiyle beraber iş yaptığım çok değerli bir insandır. Almak istediğim hizmetin adımlarını tek tek, işleyişiyle beraber kusursuz bir şekilde süreci takip etmemi, yaptığı işin ne denli emek gerektirdiğini ve önemli olduğunu görmemi, aynı zamanda bunların yanında iş ahlakıyla bana da bir nevi güzel şeyler katarak sağladı. SC-Riber projesine olan katkıları ve kendisinin gerek arkadaşlığı için KingOf'a teşekkürlerimi iletiyorum."}
                    sign={"~Yavuz 'OverBrave'"}
                />

                <ReferenceCard
                    logo={knightnw}
                    title={"Eren Aslan"}
                    description={"Eklentileri hem stabil hemde daha işlevsel. Daha önce kullandığım çiftçi eklentilerinden kFarmere geçtigimde aradaki farkı daha iyi anladım."}
                    sign={"~Eren Aslan"}
                />


            </div>

        </div>
    </div>;
}