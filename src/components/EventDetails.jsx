import React from 'react'
import { useParams } from 'react-router-dom'
import EventDetailsDesign from './EventDetailsDesign'
// import sports  from '../assets/sports.png'
import torneo1 from '../assets/torneo_carousel1.jpg'
import torneo2 from '../assets/torneo_carousel2.jpg'
import torneo3 from '../assets/torneo_carousel3.jpg'
import torneo4 from '../assets/torneo_carousel4.jpg'
import torneo_poster from '../assets/torneo_poster.png'
import smash_poster from '../assets/smash_poster.png'
import shuttleup_poster from '../assets/shuttleup_poster.png'
import carrom_poster from '../assets/carrom_poster.png'
import chess_poster from '../assets/chess_poster.png'
import howzat_poster from '../assets/howzat_poster.png'
import pingpong_poster from '../assets/pingpong_poster.png'
import mobilegaming from '../assets/mobilegaming.jpg'
import pcgaming from '../assets/pcgaming_poster.jpg'
import codedrift_poster from '../assets/codedrift_poster.jpg'
import buildit_poster from '../assets/buildit_poster.jpg'
import hackathon_poster from '../assets/hackathon_poster.jpg'
import allterrain_poster from '../assets/allterrain_poster.jpg'
import robosoccer_poster from '../assets/robosoccer_poster.jpg'
import loc_poster from '../assets/loc_poster.jpg'
import treasurehunt_poster from '../assets/treasurehunt_poster.jpg'
import modeldisplay_poster from '../assets/modeldisplay_poster.jpg'
import techquiz_poster from '../assets/techquiz_poster.jpg'
import ideathon_poster from '../assets/ideathon_poster.png'
import debate_poster from '../assets/debate_poster.png'
import publicspeaking_poster from '../assets/publicspeaking_poster.jpg'
import cricket_moment1 from '../assets/cricket_moment1.JPG'
import cricket_moment2 from '../assets/cricket_moment2.JPG'
// import cricket_moment3 from '../assets/cricket_moment3.JPG'
import chess_moment1 from '../assets/chess_moment1.JPG'
import chess_moment2 from '../assets/chess_moment2.JPG'
import torneo_moment1 from '../assets/torneo_moment1.JPG'
import torneo_moment2 from '../assets/torneo_moment2.JPG'
import torneo_moment3 from '../assets/torneo_moment3.JPG'
import carrom_moment1 from '../assets/carrom_moment1.JPG'
import carrom_moment2 from '../assets/carrom_moment2.JPG'
import shuttleup_moment1 from '../assets/shuttleup_momen1.JPG'
import shuttleup_moment2 from '../assets/shuttleup_moment2.JPG'
import bridgebuilding_moment1 from '../assets/bridgebuilding_moment1.JPG'
import bridgebuilding_moment2 from '../assets/bridgebuilding_moment2.JPG'
import bridgebuilding_moment3 from '../assets/bridgebuilding_moment2.JPG'
import modeldisplay_moment1 from '../assets/modeldisplay_moment1.JPG'
import modeldisplay_moment2 from '../assets/modeldisplay_moment2.JPG'
import treasurehunt_moment1 from '../assets/treasurehunt_moment1.JPG'
import codedrift_moment1 from '../assets/codedrift_moment1.JPG'
import robo_moment1 from '../assets/robo_moment1.JPG'
import allterrain_moment1 from '../assets/allterrain_moment1.JPG'
import allterrain_moment2 from '../assets/allterrain_moment2.JPG'
import allterrain_moment3 from '../assets/allterrain_moment3.JPG'
import mobilegaming_moment1 from '../assets/mobilegaming_moment1.JPG'
import mobilegaming_moment2 from '../assets/mobilegaming_moment2.JPG'
import pcgaming_moment1 from '../assets/pcgaming_moment1.JPG'
import pcgaming_moment2 from '../assets/pcgaming_moment2.JPG'
import pcgaming_moment3 from '../assets/pcgaming_moment3.JPG'
import pcgaming_moment4 from '../assets/pcgaming_moment4.JPG'
import ideathon_moment1 from '../assets/ideathon_moment1.JPG'
import hackathon_moment1 from '../assets/hackathon_moment1.JPG'
import easternsolo from '../assets/easternsolo.jpg'
import easternsolodance from '../assets/easternsolodance.jpg'
import fashionshow_poster from '../assets/fashionshow_poster.jpg'
import westernsolodance from '../assets/westernsolodance.jpg'
import duosing from '../assets/duosing.jpg'
import groupdance from '../assets/groupdance.jpg'
import westernsolo from '../assets/westernsolo.jpg'

import { useEffect } from 'react'
const EventDetails = () => {
  const params = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const allEvents =[
    {
      key:1,
      title:'torneo',
      person1: 'Bimlesh',
      person2: 'Satyaki',
      contact1 : 6206960830,
      contact2 : 8777098328,
      image : torneo_poster,
      carousel1: torneo_moment1,
      carousel2 : torneo_moment2,
       carousel3 : torneo_moment3,
      category:'sports',
      date :'29/30/31th March',
      fee :' Rs 1800'
    },
    {
      key:2,
      title:'smash',
      person1: 'Suman',
      person2: 'Sashank',
      contact1 :7872548746,
      contact2 : 9667022458,
      image:smash_poster,
      carousel1: torneo1,
      carousel2 : torneo2,
      carousel3 : torneo3,
      carousel4 : torneo4,
      category:'sports',
      date :'27/28 th March',
      fee :'Rs 800'
    },
    {
      key:3,
      title:'shuttleup',
      person1: 'Subhajit',
      person2: 'Saptarshi',
      contact1 :8768104797,
      contact2 : 8017724781,
      image:shuttleup_poster,
      carousel1: shuttleup_moment1,
      carousel2 : shuttleup_moment2,
      category:'sports',
      date :'23/24/25 th March',
      fee :'Single: Rs 100, Double : Rs 200'
    },
    {
      key:4,
      title:'carrom',
      person1: 'Jayajyoti',
      person2: 'Anirban',
      contact1 :9123838791,
      contact2 : 7980809234,
      image:carrom_poster,
       carousel1: carrom_moment1,
      carousel2 : carrom_moment2,
      category:'sports',
      date :'27/28 th March',
      fee :'Single: Rs 50, Double : Rs 100'
    },
    {
      key:5,
      title:'chess',
      person1: 'Debayan',
      person2:'',
      contact1 :7908130726,
      contact2 : 123344556677,
      image:chess_poster,
       carousel1: chess_moment1,
      carousel2 : chess_moment2,
      category:'sports',
      date :'29/30 th March',
      fee :'Rs 100'
    },
    {
      key:6,
      title:'howzat',
      person1: 'Roshan',
      person2: 'Shuvam',
      contact1 :9073255879,
      contact2 : 9609604995,
      image:howzat_poster,
       carousel1: cricket_moment1,
      carousel2 : cricket_moment2,
       carousel3: cricket_moment1,
      category:'sports',
      date :'23/24/25 th March',
      fee :'Rs 1500'
    },
    {
      key:7,
      title:'table tennis',
      person1: 'Surya',
      person2: 'Biki',
      contact1 :8017379985,
      contact2 :9002762648,
      image:pingpong_poster,
      category:'sports',
      date :'23/24/25 th March',
      fee :'Single: Rs 100, Double : Rs 200'
    },
    {
      key:8,
      title:'mobile gaming',
      person1: 'Sounak Sarkar',
      person2: 'Anik Das',
      contact1 :7980335416,
      contact2 :7980290813,
      image:mobilegaming,
      category:'gaming',
      date :'27/28 th March',
       carousel1: mobilegaming_moment1,
      carousel2 : mobilegaming_moment2,

      fee :'Rs 2000',
      prize:'Rs 2000'
    },
    {
      key:9,
      title:'pc gaming',
      person1: 'Aniruddha Dutta',
      person2: 'Subham Dutta',
      contact1 :7605860024,
      contact2 : 9831118649,
      image:pcgaming,
      category:'gaming',
       carousel1: pcgaming_moment1,
      carousel2 : pcgaming_moment2,
       carousel3:pcgaming_moment3,
       carousel4:pcgaming_moment4,
      date :'27/28 th March',
      fee :'Rs 500 per team',
      prize:'Rs 5000'
    },
    {
      key:10,
      title:'codedrift',
      person1: 'Debargha',
      person2: 'Tathagata',
      contact1 :629115156,
      contact2 : 6290905836,
      rule:'https://docs.google.com/document/d/1QScoOopmtzPotXeQbfl-uIOkFYm3evK-jQHke0OiV0M/edit?usp=sharing',
      register:'https://docs.google.com/forms/d/e/1FAIpQLSf_WJvEShd-S8nDz9p_fhUYrPqSdfDQ1qifS1LK4YqXDINFvg/viewform?usp=share_link',
      image:codedrift_poster,
      carousel1:codedrift_moment1,
      category:'technical',
      date :'27 th March',
      fee :'Single: Rs 100, Double : Rs 200',
      prize:'Rs 15000'
    },
    {
      key:11,
      title:'all terrain',
      person1: 'Suchinta',
      person2: 'Beas',
      contact1 :6290318248,
      contact2 : 7439582390,
      rule:'https://docs.google.com/document/d/1PMLUDPyS5MLEpQqN7BDN5H_i3C_Yvk0eyOJf9xtGpO8/edit?usp=share_link',
      register:'https://docs.google.com/forms/d/e/1FAIpQLSdWyC08WpFQ7DRljKQWWGeUUnUmtvwNTlaJs_q2DBJVhp_f1w/viewform?usp=share_link',
      image:allterrain_poster,
      carousel1:allterrain_moment1,
      carousel2:allterrain_moment2,
      carousel3:allterrain_moment3,
      date :'27/28 th March',
      fee :'Team Size (4 Max) Rs 200 per team',
      prize:'Rs 15000',
      category:'technical'
    },
    {
      key:12,
      title:'robo soccer',
      person1: 'Debgandhar Ghosh',
      person2: 'Aritra Naharay',
      contact1 :8617750297,
      contact2 : 9599904224,
      rule:'https://docs.google.com/document/d/1QKyuoz0UvJkszey3PsSQ28GYmaBQQce8RXKwDAtbs_s/edit?usp=share_link',
      register:'https://docs.google.com/forms/d/e/1FAIpQLSdGsBl6STTIEphK6jcv1mCpHwdWwxa02ZDzK0FnMgANyKWHbQ/viewform?usp=share_link',
      image:robosoccer_poster,
      carousel1:robo_moment1,
      date :'27/28 th March',
      fee :'Rs 50 per person',
      prize:'Get Instant cashback of Rs 80',
      category:'technical'
    },
    {
      key:13,
      title:'line of control',
      person1: 'Ankana Parbat',
      person2: 'Mrigank Biswas',
      contact1 :8017608350,
      contact2 : 6290336953,
      rule:'https://docs.google.com/document/d/1jCJx17aZtWn6yCGZEh-hGPK4HPrSFWqhsvfBzycX36I/edit?usp=share_link',
      register:'https://docs.google.com/forms/d/e/1FAIpQLSfTnLGcgS5s-LF3k0-qasL3PmJJn0Woc5cVadKi37ByzjHmeg/viewform?usp=share_link',
      image:loc_poster,
      date :'27/28 th March',
      fee :'Team Size (4 Max) Rs 200 per team',
      prize:'Rs 10000',
      category:'technical'
    },
    {
      key:14,
      title:'treasure hunt',
      person1: 'Anwesha Ghosh',
      person2: 'Somdeep Bose',
      contact1 :6295903552,
      contact2 : 8336866253,
      rule:'https://docs.google.com/document/d/1Vq2gqZ68NvQKMuS7DkPOrEOh-biB3k9K1AF1xPnoSuk/edit?usp=share_link',
      register:'https://docs.google.com/forms/d/e/1FAIpQLSfCtvdhl7_vk_WnDzkH96wXihs3w0R2rAs-mCk399ilcWtQpg/viewform?usp=share_link',
      image:treasurehunt_poster,
      carousel1:treasurehunt_moment1,
        date :'27/28 th March',
      fee :'Team Size (4 Max) Rs 50 per team',
      prize:'Rs 5000',
      category:'technical'
    },
    {
      key:15,
      title:'model display',
      person1: 'Arpita Ghosh',
      person2: 'Sinjini Singh',
      contact1 :7003252433,
      contact2 : 9163984556,
      rule:'https://docs.google.com/document/d/141LzaIVN-3EEhgMXfHQ5eTS7K4hgK28lwtnJ5TXUhN4/edit?usp=share_link',
      register:'https://docs.google.com/forms/d/e/1FAIpQLSe5jWSktOZ7Q8mo2x5hGx574vGyE-KRNc-HkF3lXXekhBEV4w/viewform?usp=share_link',
      image:modeldisplay_poster,
      carousel1:modeldisplay_moment1,
      carousel2:modeldisplay_moment2,
        date :'27/28 th March',
      fee :' Rs 20 per person',
      prize:'Rs 6000',
      category:'technical'
    },
    {
      key:16,
      title:'tech quiz',
      person1: 'Pritha Mukherjee',
      person2: 'Saumyadip Dutta',
      contact1 : 8697232839,
      contact2 : 9007080729,
      rule:'https://docs.google.com/document/d/1t_1mqfVagGZRpiUq_1YCNM9tfe-NkboIxiXH4dv85Co/edit?usp=share_link',
      register:'https://docs.google.com/forms/d/e/1FAIpQLSc61naQhNNWxFmZ5H9AVRn1dRETkxqs5sK8t0p_rmRonMJ7Ng/viewform?usp=share_link',
      image:techquiz_poster,
        date :'27/28 th March',
      fee :'Team Size (2 Max) Rs 50 per team',
      prize:'Rs 5000',
      category:'technical'
    },
    {
      key:17,
      title:'ideathon',
      person1: 'Soumosree Mondal',
      person2: 'Ambar Pahari',
      contact1 :8777793318,
      contact2 :8768906846,
      rule:'https://docs.google.com/document/d/18Sl8evlU8IMU0p3h66Zp-t1NVSmeBWgo7katDNXkH0M/edit?usp=share_link',
      register:'https://docs.google.com/forms/d/e/1FAIpQLScNSYu3gtgECuHIGkLlm0KEDuqkHxRzgyb4mR9qhBCYIbsmEg/viewform?usp=share_link',
      image:ideathon_poster,
      carousel1:ideathon_moment1,
      date :'27 th March',
      fee :'Team Size (5 Max) Rs 200 per team',
      prize:'Rs 3000',
      category:'business'
    },
    {
      key:18,
      title:'debate',
      person1: 'Soumosree Mondal',
      person2: 'Ambar Pahari',
      contact1 :8777793318,
      contact2 : 8768906846,
      rule:'https://docs.google.com/document/d/1oXIJlmGNeRzEibGk_GB3NxA9UXoj6WGds5f-cPnUKDo/edit?usp=share_link',
      register:'https://docs.google.com/forms/d/e/1FAIpQLSfu-cMxMPkEr2YVkL-vxwrcE5v_yfu821Cm3sI7of97WYTbeQ/viewform?usp=share_link',
      image:debate_poster,
      date :'27 th March',
      fee :'Team Size (5 Max) Rs 200 per team',
      prize:'Rs 3000',
      category:'business'
    },
    {
      key:19,
      title:'hackathon',
      person1: 'Subhradeep Samanta',
      person2: 'person2',
      contact1 :8584021403,
      contact2 : 123344556677,
      rule:'https://docs.google.com/document/d/17pHaEN2VQ9ji639xiex4mD6RfSojAXP9FdIQwlS35qU/edit?usp=share_link',
      register:'https://docs.google.com/forms/d/e/1FAIpQLSdefpPeJBBVav5GxcpEUQ8DTyzLcRhIVN4bRZ_gySVIO7Yq8Q/viewform?usp=share_link',
      image:hackathon_poster,
      carousel1:hackathon_moment1,
        date :'27/28 th March',
      fee :'Team Size (6 Max) Rs 200 per team',
      prize:'Rs 15000',
      category:'technical'
    },
     {
      key:20,
      title:'bridge building',
      person1: 'Mustafa Rakib',
      person2: 'Chandan Thakur',
      contact1 :8759046238,
      contact2 : 8240119349,
      rule:'https://docs.google.com/document/d/1NnuhO7CT2XgQDX57ggLClL7qTHHu_wFEKKeJhuvqu9Q/edit?usp=share_link',
      register:'https://docs.google.com/forms/d/e/1FAIpQLSehgmxf5-pyKNMTXMqh4S0C2nCKiuio7_PnJVMe2iAmj9JCvA/viewform?usp=share_link',
      image:buildit_poster,
        date :'27/28 th March',
        carousel1:bridgebuilding_moment1,
        carousel2:bridgebuilding_moment2,
        carousel3:bridgebuilding_moment3,
      fee :'Team Size (5 Max) Rs 250 per team',
      prize:'Rs 5000',
      category:'technical'
    },
     {
      key:21,
      title:'public speaking',
      person1: 'Soumosree Mondal',
      person2: 'Ambar Pahari',
      contact1 :8777793318,
      contact2 : 8768906846,
      rule:'https://docs.google.com/document/d/1WuazWbHWKYzBPaMY80IhcpIH2bidLr9VbemSQwaZpwE/edit?usp=share_link',
      register:'https://docs.google.com/forms/d/e/1FAIpQLSekvFXb1naDRyRWoAMZOSHdb0YiX2M8NuvicNqab1GBitGAjQ/viewform?usp=share_link',
      image:publicspeaking_poster,
      date :'27 th March',
      fee :'Rs 50 per person',
      prize:'Rs 1000',
      category:'business'
    },
    {
      key:22,
      title:'eastern solo singing',
      person1: 'Debgandhar Ghosh',
      person2: 'Aritra Naharay',
      contact1 :8617750297,
      contact2 : 9599904224,
      rule:'https://docs.google.com/document/d/1x2OQ16s1t63o8btSDeLaZhjcbetlgt8ejJmA--2Bung/edit?usp=share_link',
      register:'#',
      image:easternsolo,
      date :'4th and 7th April',
      fee :'Rs 50 per person',
      prize:'Rs 1000',
      category:'cultural'
    },
    {
      key:23,
      title:'eastern solo dancing',
        person1: 'Sourina Rom',
      person2: 'Surottama Roy',
      contact1 :8697362365,
      contact2 : 7003689835,
      rule:'https://docs.google.com/document/d/1WiaOku69i1idVVh_t1aqZaDKqLxwPr840EVgpwZZq9w/edit?usp=share_link',
      register:'#',
      image:easternsolodance,
      date :'3rd and 7th April',
      fee :'Rs 100 per person',
      prize:'Rs 1000',
      category:'cultural'
    },
     {
      key:24,
      title:'fashion show',
      person1: 'Sourina Rom',
      person2: 'Surottama Roy',
      contact1 :8697362365,
      contact2 : 7003689835,
      rule:'https://docs.google.com/document/d/1VJCy-VkT4zkEqwS2CCEQC137FMSfum9pPSW-LGyU-U4/edit?usp=share_link',
      register:'#',
      image:fashionshow_poster,
      date :'8th April',
      fee :'Rs 100 per person',
      prize:'Rs 1000',
      category:'cultural'
    },
     {
      key:24,
      title:'western solo singing',
      person1: 'Debgandhar Ghosh',
      person2: 'Aritra Naharay',
      contact1 :8617750297,
      contact2 : 9599904224,
      rule:'https://docs.google.com/document/d/1OH8egMpFLr9VZJ7Cc1lQqGWYO3fQKJYf8Rr4xwShT3U/edit?usp=share_link',
      register:'#',
      image:westernsolo,
      date :'4th and 7th April',
      fee :'Rs 50 per person',
      prize:'Rs 1000',
      category:'cultural'
    },
     {
      key:24,
      title:'duo singing',
      person1: 'Debgandhar Ghosh',
      person2: 'Aritra Naharay',
      contact1 :8617750297,
      contact2 : 9599904224,
      rule:'https://docs.google.com/document/d/1pFvs8tGUQQhJ54bpVjlCELE6bRwP_7Ly7jW_BpWkRo4/edit?usp=share_link',
      register:'#',
      image:duosing,
      date :'4th and 7th April',
      fee :'Rs 100 per person',
      prize:'Rs 1000',
      category:'cultural'
    },
     {
      key:24,
      title:'western solo dancing',
      person1: 'Sourina Rom',
      person2: 'Surottama Roy',
      contact1 :8697362365,
      contact2 : 7003689835,
      rule:'https://docs.google.com/document/d/1_PhVdunTxAOZwb61OnmsdsmA5FQoJO0dxua5c-ZDbrs/edit?usp=share_link',
      register:'#',
      image:westernsolodance,
      date :'3rd and 7th April',
      fee :'Rs 100 per person',
      prize:'Rs 1000',
      category:'cultural'
    },
     {
      key:24,
      title:'group dance',
      person1: 'Sourina Rom',
      person2: 'Surottama Roy',
      contact1 :8697362365,
      contact2 : 7003689835,
      rule:'https://docs.google.com/document/d/1Om26T7gjV8R2h21uvl_DI8zEy7D1LeyZKDBjedgcj-Q/edit?usp=share_link',
      register:'#',
      image:groupdance,
      date :'3rd and 7th April',
      fee :'Rs 600 per team',
      prize:'Rs 1000',
      category:'cultural'
    },
  
  ]
  return (
    <>
      {
        allEvents.filter((data)=>{
      return data.title===params.id}
     ).map((i)=>{
      return(
        <EventDetailsDesign key={i.key} 
        title={i.title}
        category ={ i.category}
        person1={i.person1}
        person2={i.person2}
        contact1={i.contact1}
        contact2={i.contact2}
        image={i.image}
        carousel1 = {i.carousel1}
        carousel2 = {i.carousel2}
        carousel3 = {i.carousel3}
        carousel4 = {i.carousel4}
        rule={i.rule}
        register={i.register}
        date={i.date}
        fee = {i.fee}
        prize = {i.prize}
        
        />
      )
     })
    }

      </>
  )

}

export default EventDetails