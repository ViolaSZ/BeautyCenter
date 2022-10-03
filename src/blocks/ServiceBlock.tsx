import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import './ServiceBlock.css';
import hair from './hair.jpg';
import brows from './brows.jpg';
import manicure from './manicure.jpg';

interface ServiceInfo{
   services: Service[];
   staff: StaffMember[];
}

function loadServiceInfo(): Promise<ServiceInfo>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                services: [
                    {
                        id: 1,
                        name: 'Haircut and coloring',
                        price: 30,
                        description: 'We can offer you long haircuts, short haircuts and medium length haircuts. Hair length is not determined by fashion - both ultra-short pixies and luxurious long curls are relevant. But even long hair needs to be neatly shaped, so a visit to the hairdresser for a haircut is the key to the beauty and health of hair.',
                        staffid: [1,2],
                        imgurl: hair
                    },
                    {
                        id: 2,
                        name: 'Eyebrow correction and coloring',
                        price: 35,
                        description: 'Correction of the shape of the eyebrows and their subsequent coloring with henna or paint is one of the most popular cosmetic procedures for modern girls. All this is because natural and harmoniously shaped eyebrows make the look more expressive, make the eyes shine and emphasize femininity.',
                        staffid: [3,4],
                        imgurl: brows
                    },
                    {
                        id: 3,
                        name: 'Manicure',
                        price: 40,
                        description: 'Hands are your calling card. It is impossible to imagine a complete style without well-groomed nails. We use only proven modern materials. Particular attention in our salon is paid to the safety of procedures. We use only disposable materials, and hygienic and sanitary standards are strictly observed when processing tools.',
                        staffid: [5,6],
                        imgurl: manicure
                    }
                ],
                staff: [
                    {
                        id: 1,
                        name: 'Kushal Katya',
                        experience: 3
                    },
                    {
                        id: 2,
                        name: 'Abramenko Marina',
                        experience: 1.5
                    },
                    {
                        id: 3,
                        name: 'Sudas Alexandra',
                        experience: 4
                    },
                    {
                        id: 4,
                        name: 'Valova Veronika',
                        experience: 1
                    },
                    {
                        id: 5,
                        name: 'Samoilova Karina',
                        experience: 10
                    },
                    {
                        id: 6,
                        name: 'Kushal Victoria',
                        experience: 6
                    }
                ]
            });
        },30);
    });
}

interface Service{
    id: number;
    name: string;
    price: number;
    description: string;
    staffid: number[];
    imgurl: string;
}

interface StaffMember{
    id: number;
    name: string;
    experience: number;
}

function ServiceBlock(){
    let [serviceInfo,setServiceInfo] = useState<null | ServiceInfo>(null);
    useEffect(()=> {
        loadServiceInfo()
            .then(value => {setServiceInfo(value)});
    }, []);
    let servicehtml;
    if (serviceInfo == null){
        servicehtml = <div>
                <h2>Loading... Please, wait</h2>
                <Spinner animation="border" variant="dark" />
            </div>;
    }
    else {
        servicehtml = <div className="ServiceBlock">
            {serviceInfo.services.map(servise => { 
                return <div>
                    
                    <div className="details">
                        <img src={servise.imgurl} className="img"/>
                        <div>
                            <div><h5>{servise.name}</h5></div>
                            <div><p className="text description"><i>{servise.description}</i></p></div>
                            <div><span className="text">Price: {servise.price}</span></div>
                            <span>Masters:</span>
                            <div>{servise.staffid.map(memberid => {
                                const member = serviceInfo!.staff.find(member => member.id == memberid);
                                if (!member){
                                    return <></>;
                                }
                                return <div>
                                    <span className="text">{member.name}, experience: {member.experience}</span>
                                </div>;
                            })}</div>
                        </div>
                    </div>
                </div>;
            })}
        </div>;
    }
    return (
        <>{servicehtml}</>
    );
}

export default ServiceBlock;