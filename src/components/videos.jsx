import { useState } from "react";
import '../styles/videos.css'
const Videos = () => {
   let [video,setVideo]=useState([
    {
        thumbnail:"https://i.ytimg.com/vi/XhR2nleQOb8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjH4cSLHA9z-DOhGxC7WmOALQ0-Q",
        title:"Unlimited ಪೆಟ್ರೋಲ್ 🔥 24/7 ಬೆಂಕಿ.! ಯಾವುದು ಮಾರಾಯ ಈ ದೇಶ.? | Dr Bro",
        channel:"Dr Bro",
        views:"996K views",
        id:1
    },
    {
        thumbnail:"https://i.ytimg.com/vi/87sIUadVrfo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfnMa1gdt2JPL24NtqZN4y2pQhpg",
        title:"Odisha train tragedy: Vande Bharat Express crosses from Balasore where deadly accident took place ",
        channel:"ANI News",
        views:"125k views",
        id:2
    },
    {
        thumbnail:"https://i.ytimg.com/vi/ShFHti2aAmY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0iKyr0Io2R2hWUsDhfcc14H1vbg",
        title:"Lion Surprised Wildlife Photographers When He was Taking Pictures of a Pride ",
        channel:"Your Top 10s",
        views:"10M views",
        id:3
    },
    {
        thumbnail:"https://i.ytimg.com/vi/88MGObmJ0-Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhWXmob4uJ-r42HF0k_sW6_KED2Q",
        title:"ರಿಯಲ್‌ ಬಾಹುಬಲಿ ಈ ದಕ್ಷಿಣ ಪಥೇಶ್ವರ! | Immadi Pulikeshi In Masth Magaa Leaders | Amar Prasad |",
        channel:"Masth Magaa",
        views:"123K views",
        id:4
    },
    {
        thumbnail:"https://i.ytimg.com/vi/9tgAJLS91sA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG2AuIk2C-hhgh-OTbG9axh-SHiA",
        title:"Kirunage - Full Video | PS2 Kannada | @ARRahman | Mani Ratnam | Karthi, Trisha | Rakshita Suresh",
        channel:"Tips Kannada",
        views:"72K views",
        id:5
    },
    {
        thumbnail:"https://i.ytimg.com/vi/6ljmNuRK_ys/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD51Du5jh1G06ZSnpZ95di1k-rXPw",
        title:"Agri Practical | VEGETABLES SEEDS REVISION|  ",
        channel:"Agri practical",
        views:"1K views",
        id:6
    },
    {
        thumbnail:"https://i.ytimg.com/vi/Ev4GOeRcUVU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDquwTQCXTWgROK59zCqYrJ8CzvyA",
        title:"Long Drive With Ex & Crush | Ft. Apoorva Arora, Parikshit Joshi & Nupur Nagpal | RVCJ Media",
        channel:"RVCJ Media",
        views:"3.7M views",
        id:7
    },
    {
        thumbnail:"https://i.ytimg.com/vi/eEr56MfFP6I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYu4Ep2dPBX2rcCOyK8RDjZT9QJg",
        title:"Bengaluru, (Bangalore), India 🇮🇳 in 4K 60FPS ULTRA HD HDR Drone Video (Silicon Valley of India) ",
        channel:"Exploropia",
        views:"1M views",
        id:8
    },
    {
        thumbnail:"https://i.ytimg.com/vi/hacR9grlPjM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCExGHBBIDXL9S-fsDt6ja_11sTRQ",
        title:"Teaser - Who's Japan? Intro Video (Telugu) | Karthi, Anu Emmanuel, Sunil | GV Prakash | Raju Murugan",
        channel:"Dream Warrior Pictures",
        views:"7M views",
        id:9
    },
    {
        thumbnail:"https://i.ytimg.com/vi/YmfjPFg4ZFo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJG_qOiMpld5RMpfr-LV_OOUhwzg",
        title:"Introduction to Coding in Kannada | What is coding? | How to code? | Programming language in Kannada ",
        channel:"Engineering in Kannada",
        views:"109K views",
        id:10
    },
    {
       thumbnail:"https://i.ytimg.com/vi/TV9jDDrXV9s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6LfHhv1PtG6TaYn6kv6ZT-m_AoQ",
        title:"Big Bulletin With HR Ranganath | How Did Three Trains Collide In Odisha..? |",
        channel:"Public TV",
        views:"605K views",
        id:11
    },
    {
        thumbnail:"https://i.ytimg.com/vi/olG5qT_zjqg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKvQp7rH3-18hQpsSE3tR-rMJGrQ",
        title:"MAA (Telugu) - Short Film | Ondraga Originals | Sarjun KM | Sundaramurthy KS",
        channel:"Ondraga Entertainment",
        views:"6.1M views",
        id:12
    }
   ])
  let [shorts,setShorts]=useState([
    {
        thumbnail:"https://i.ytimg.com/vi/eVdwLaNsLw8/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBL_ofkbJEfwkhnpizQCZ5tcGwAIA",
        title:"The Famous Wodeyar’s Curse  | Keerthi History ",
        views:"1M views"
    },
    {
        thumbnail:"https://i.ytimg.com/vi/xsFBaRyCCMY/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAEnPJde-L7On9PQYi2VIBds8TXqA",
        title:"Adah sharma real talent",
        views:"2.6M views"
    },
    {
        thumbnail:"https://i.ytimg.com/vi/aH9hBPCDS0Q/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLB4Bghu0s6373MoVEuJG8ywMypcWQ",
        title:"It’s time to hop on  ",
        views:"2.6M views"
    },
    {
        thumbnail:"https://i.ytimg.com/vi/VRevnp1YpWc/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCSWkIMi8P_v_KgJ77a3XN_jOha9g",
        title:"Our Humble Tribute to the Rebal Star Dr.Ambareesh on his Birth Anniversary | Abishek Ambareesh",
        views:"111K views"
    },
    {
        thumbnail:"https://i.ytimg.com/vi/tcAeYM-t_YU/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLA3b4RwLfJqodImyjYp_lmYo6cL_A",
        title:"Enjoy Beautiful Nature Life 🥝🍒🫐🍇🍊",
        views:"91M views"
    },
    {
        thumbnail:"https://i.ytimg.com/vi/944GQ4GrcAM/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAyTevxCjRYKndjsAnp0xXsKVYH5w",
        title:"Anchor Anushree 🥀💕 with all master's cute dance ",
        views:"584K views"
    }
  ])
  let removevideo=(id,name)=>{
    let result=video.filter((x)=>x.id!==id)
    setVideo(result)
    alert(`${name} video got deleted`)
  }
    return ( 
        
        <div className="videos">
        <h1>Featured Videos</h1>
        <div className="videodata">
        {video.map((data)=>{
            return( <div className="video">
                <img src={data.thumbnail} alt="" />
                <h3>{data.title}</h3>
                <p>{data.channel}</p>
                <p>{data.views}</p>
                 <a onClick={()=>removevideo(data.id,data.channel)}>Remove</a>
            </div> )
        })}
        </div>
        <div className="shorts">
            <h1>shorts</h1>
            <div className="shortsdata">
                {shorts.map((reels)=>{
                    return( 
                        <div className="short">
                       <img src={reels.thumbnail} alt="" />
                       <h3>{reels.title}</h3>
                       <p>{reels.views}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>

        
     );
}
 
export default Videos;