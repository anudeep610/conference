import React from 'react';
import "../css/committe.css";
import Navabar from '../components/navbar/navabar'
import ceo from "../assets/images/ceo.jpg";
import president from "../assets/images/president.jpg";
import principal from "../assets/images/principal.jpg";
import director from "../assets/images/director.gif";
import secretary from "../assets/images/TKN.jpg"
import {MdOutlineCopyright} from "react-icons/md"

export default function committe() {
  return (
    <section className='committe-page-main-container'>
        <div className="committe-page-hero-container">
            <Navabar/>
            <div className="committe-page-heading-container">
                <div className="patrons-container">
                    <h1 className="main-heading">Chief Patrons</h1>
                    <div className="patron-cards-container">
                        <div className="main-patron-card">
                            <img className='main-patron-image' src={president} alt="president"/>
                            <h2 className="main-patron-name">Sree Siddalinga Swamiji</h2>
                            <h3 className="main-patron-designation">President</h3>
                            <h5 className="main-patron-institute">Sree Siddaganga Education Society, Tumkur</h5>
                        </div>
                        <div className="main-patron-card">
                            <img className='main-patron-image' src={secretary} alt="secretary"/>
                            <h2 className="main-patron-name">Shri T K Nanjundappa </h2>
                            <h3 className="main-patron-designation">Secretary</h3>
                            <h5 className="main-patron-institute">Sree Siddaganga Education Society, Tumkur</h5>
                        </div>
                        <div className="main-patron-card">
                            <img className='main-patron-image' src={director} alt="director"/>
                            <h2 className="main-patron-name">Dr. M N Channabasappa</h2>
                            <h3 className="main-patron-designation">Director</h3>
                            <h5 className="main-patron-institute">SIT, Tumkur</h5>
                        </div>

                        <div className="main-patron-card">
                            <img className='main-patron-image' src={ceo} alt="ceo"/>
                            <h2 className="main-patron-name">Dr. Shivakumaraiah</h2>
                            <h3 className="main-patron-designation">CEO</h3>
                            <h5 className="main-patron-institute">SIT, Tumkur</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="patrons-container">
            <h1 className="patrons-heading">General Chair</h1>
            <div className="patron-cards-container">
                <div className="main-patron-card">
                    <img className='main-patron-image' src={principal} alt="principal"/>
                    <h2 className="main-patron-name">Dr. S V Dinesh</h2>
                    <h3 className="main-patron-designation">Principal</h3>
                    <h5 className="main-patron-institute">SIT, Tumkur</h5>
                </div>
            </div>
        </div>

        <div className="patrons-container">
            <h1 className="patrons-heading">Organizing Committee</h1>
            <div className="committe-container">
                <h3 className="committe-details">Dr. K V Suresh, Professor and Head, Dept. of  ECE, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. K Viswanath, Professor and Head, Dept. of  ETE, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. H M Kalpana, Professor and Head, Dept. of EIT, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Rashmi, Professor and Head, Dept. of EEE, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. R Kumaraswamy, Professor, Dept. of ECE, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. K C Narasimhamurthy, Professor, Dept. of ETE, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Siddeswara Prasad, Professor, Dept. of EIT, SIT, Tumkur</h3>
            </div>
        </div>

        <div className="patrons-container">
            <h1 className="patrons-heading">Advisory Committee</h1>
            <div className="committe-container">
                <h3 className="committe-details">Dr. Deepa Shenoy, IEEE Chair Bangalore Section</h3>
                <h3 className="committe-details">Mr. Mathew Magimai Doss, Idiap Research Institute, Switzerland</h3>
                <h3 className="committe-details">Dr. Arokiaswami Alphones, Nanyang Technological University, Singapore</h3>
                <h3 className="committe-details">Dr. Hasan Fleyeh, Dalarna University, Sweden</h3>
                <h3 className="committe-details">Dr. Michael G Danikas, Democritus University of Thrace, Xanthi </h3>
                <h3 className="committe-details">Dr. Raji Sundarajan, Purdue University, West Lafayette</h3>
                <h3 className="committe-details">Dr. Mariana AmorimFraga, Federal University of Sao Paulo, Brazil</h3>
                <h3 className="committe-details">Prof. Linga Reddy Cenkeramaddi, University of Agder, Norway</h3>
                <h3 className="committe-details">Dr. Akhilesh Thyagaturu, Arizona State University, USA</h3>
                <h3 className="committe-details">Dr. Paavo Alku, Aalto Univ, Finland</h3>
                <h3 className="committe-details">Mr. Pablo Orduna, CEO, Labsland Spain</h3>
                <h3 className="committe-details">Dr. B Yegnanarayana, IEEE Fellow</h3>
                <h3 className="committe-details">Dr. Devendra Jalihal, IIT Madras</h3>
                <h3 className="committe-details">Dr. C Krishna Mohan, IIT Hyderabad</h3>
                <h3 className="committe-details">Dr. S R Mahadeva Prasanna, IIT Dharwad</h3>
                <h3 className="committe-details">Dr. Rajesh Hegde, IIT Khanpur</h3>
                <h3 className="committe-details">Dr. Preeti Rao, IIT Bombay</h3>
                <h3 className="committe-details">Dr. K Sreenivasa Rao, IIT Kharagpur</h3>
                <h3 className="committe-details">Dr. Kaushik Basu, IISc Bangalore</h3>
                <h3 className="committe-details">Dr. Arun Mahendrakar, IIT Madras</h3>
                <h3 className="committe-details">Dr. Jayant Mukhyopadhyaya, IIT Kharagpur</h3>
                <h3 className="committe-details">Dr. T Sreenivas, IISc Bangalore</h3>
                <h3 className="committe-details">Dr. Ajith T Kalghatgi, Former Director, B.E.L</h3>
                <h3 className="committe-details">Mr. Lokesh Rayasandra Boregowda, Samsung, Bangalore</h3>
                <h3 className="committe-details">Dr. Lalit Kumar, Fellow, INAE, CEERI</h3>
                <h3 className="committe-details">Dr. Roy Pailey, IIT Guwahati</h3>
                <h3 className="committe-details">Dr. Shyam Vasudevarao, Renalyx, Bangalore</h3>
            </div>
        </div>

        <div className="patrons-container">
            <h1 className="patrons-heading">""</h1>
            <div className="patron-cards-container">
            <div className="patron-card">
                    <h2 className="patron-name">Dr. Veena Karjigi</h2>
                    <h3 className="patron-designation">Associate Professor, Dept. of ECE, SIT, Tumkur</h3>
                    <h5 className="patron-institute">Technical Chair</h5>
                </div>
                <div className="patron-card">
                    <h2 className="patron-name">Dr. Parameshachari B D</h2>
                    <h3 className="patron-designation">IEEE Execom Member, Bangalore Section</h3>
                    <h5 className="patron-institute">Technical Co-Chair</h5>
                </div>

                <div className="patron-card">
                    <h2 className="patron-name">Dr. R Kumaraswamy</h2>
                    <h3 className="patron-designation">Professor, Dept. of ECE, SIT, Tumkur </h3>
                    <h5 className="patron-institute">Publication Chair</h5>
                </div>

                <div className="patron-card">
                    <h2 className="patron-name">Dr. Divya M G</h2>
                    <h3 className="patron-designation">IEEE Execom Member,Bangalore Section</h3>
                    <h5 className="patron-institute">Publication Co-Chair</h5>
                </div>

                <div className="patron-card">
                    <h2 className="patron-name">Dr. K Viswanath</h2>
                    <h3 className="patron-designation">Professor, Dept. of ETE, SIT, Tumkur</h3>
                    <h5 className="patron-institute">Publicity Chair</h5>
                </div>

                <div className="patron-card">
                {/* Dr. Mallikarjun B C */}
                {/* Associate Professor, Dept. of ETE,  */}
                    <h2 className="patron-name">Prof. T O Geeta Rani</h2>
                    <h3 className="patron-designation"> Associate Professor, Dept. of ECE, SIT, Tumkur</h3>
                    <h5 className="patron-institute">Finance Chair</h5>
                </div>
            </div>
        </div>

        <div className="patrons-container">
            <h1 className="patrons-heading">Technical Program Committee</h1>
            <div className="committe-container">
                <h3 className="committe-details">Mr. Raghavendra Prasad, IEEE Execom Member Bangalore Section</h3>
                <h3 className="committe-details">Mr. Ravi Hosamani,  IEEE Execom Member Bangalore Section</h3>
                <h3 className="committe-details">Dr. Dileep A D, IIT Mandi</h3>
                <h3 className="committe-details">Dr. Veena T, NIT Goa</h3>
                <h3 className="committe-details">Dr. Deepak K T, IIIT Dharwad</h3>
                <h3 className="committe-details">Dr. Narendra N P, Samsung, Bangalore</h3>
                <h3 className="committe-details">Dr. Guruprasad, Audience, Bangalore</h3>
                <h3 className="committe-details">Dr. Anil Kumar Vuppala, IIIT Hyderabad</h3>
                <h3 className="committe-details">Dr. Veena S, NAL, Bangalore</h3>
                <h3 className="committe-details">Mr. Dayanand Kumar N C, Samsung</h3>
                <h3 className="committe-details">Dr. Arnav Bhavsar Vinayak, IIT Mandi</h3>
                <h3 className="committe-details">Dr. Rajiv Ranjan Sahay, IIT Kharagpur </h3>
                <h3 className="committe-details">Mr. Indranil Sarkar, Fish and Richardson P. C., Boston, USA</h3>
                <h3 className="committe-details">Dr. Deepak Dasalukunte, Intel, USA</h3>
                <h3 className="committe-details">Dr. Shreyas K V, Apple Inc. USA</h3>
                <h3 className="committe-details">Dr. Lakshminidhi T, NITK, Suratkal</h3>
                <h3 className="committe-details">Dr. Narendra K C, NMIT Nitte</h3>
                <h3 className="committe-details">Dr. Prasanna Kumar M K, BMSCE Bangalore</h3>
                <h3 className="committe-details">Dr. H V Kumaraswamy, RVCE Bangalore</h3>
                <h3 className="committe-details">Dr. Shrikanth S Joshi, VIT Pune</h3>
                <h3 className="committe-details">Dr. Vaishali Patil, IIIT Pune</h3>
                <h3 className="committe-details">Dr. Suryakanth V Gangsetty, K L University, Vijayawada</h3>
                <h3 className="committe-details">Dr. Anupam Mandal, Scientist F, CAIR/DRDO</h3>
                <h3 className="committe-details">Dr. Nayeemullah Khan, VIT Chennai</h3>
                <h3 className="committe-details">Dr. Anusuya M, SJCE, Mysore</h3>
                <h3 className="committe-details">Dr. Rajeshwari Hegde, BMSCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Leena Mary, RGIT, Kottayam</h3>
                <h3 className="committe-details">Dr. Nagarajan T, SSNCE, Chennai</h3>
                <h3 className="committe-details">Dr. Aravind B N, RIT, Hassan</h3>
                <h3 className="committe-details">Dr. Vikram C M, Samsung, Bangalore</h3>
                <h3 className="committe-details">Dr. Sundara Rajan, CPRI, Bangalore</h3>
                <h3 className="committe-details">Dr. Suresh Jangamashetty, BEC, Bagalkot</h3>
                <h3 className="committe-details">Dr. B V Sumangala, MSRIT, Bangalore</h3>
                <h3 className="committe-details">Dr. Srikanth P C., MCE, Hassan</h3>
                <h3 className="committe-details">Dr. Madhavi M, PESITM, Shimoga</h3>
                <h3 className="committe-details">Dr. Jayadevappa D, JSSATE, Bangalore</h3>
                {/* <h3 className="committe-details">Dr. R S Geeta, BMSCE, Bangalore</h3> */}
                <h3 className="committe-details">Dr. Sathyanarayana S V., JNNCE, Shimoga</h3>
                <h3 className="committe-details">Dr. Lakshmi Shrinivasan, MSRIT, Bangalore</h3>
                <h3 className="committe-details">Dr. Jayashri Kulkarni, VIIT, Kondhawa</h3>
                <h3 className="committe-details">Dr. Yashvanth N, MIT, Manipal</h3>
                <h3 className="committe-details">Dr. R Kalpana, BMSCE, Bangalore</h3>
                <h3 className="committe-details">Dr. M S Suma, BMSCE, Bangalore</h3>
                <h3 className="committe-details">Mr. Chandrashekar Patil, Cisco Pvt. Ltd., Bangalore</h3>
                <h3 className="committe-details">Dr. Meharunnisa S P, Dayanda Sagar College of Engineering, Bangalore</h3>
                <h3 className="committe-details">Dr. Srinivasa Rao Inabathini, VIT, Vellore</h3>
                <h3 className="committe-details">Dr. S S Kerur, SDMCET, Dharwad</h3>
                <h3 className="committe-details">Dr. Nagamani K, RVCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Gururaj H L, Vidyavardhaka College of Engineering, Mysore</h3>
                <h3 className="committe-details">Mr. Y Pandu Rangaiah, Vardhaman College of Engineering, Hyderabad</h3>
                <h3 className="committe-details">Dr. D V Kamath, Manipal Institute of Technology</h3>
                <h3 className="committe-details">Dr. Chetan Kumar Vudadha, BITS Pilani, Hyderabad Campus</h3>
                <h3 className="committe-details">Dr. Rajesh G, NITK, Surathkal</h3>
                <h3 className="committe-details">Dr. Shashidhar Koolagudi, NITK, Surathkal</h3>
                <h3 className="committe-details">Dr. Rekha K R, SJBIT, Bangalore</h3>
                {/* <h3 className="committee-details">Dr Aravind B N, Rajeev Institute of Technology</h3>             */}
                <h3 className="committe-details">Dr B V, MSRIT, Bangalore</h3>
                <h3 className="committe-details">Dr Rudraswamy B, Sri Jayachamarajendra College Of Engineering</h3>
                <h3 className="committe-details">Dr S G Shivaprasad Yadav, MSRIT, Bangalore</h3>
                <h3 className="committe-details">Dr. Aparanji V M, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Asha Karegowda, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Bharath K P, REVA University</h3>
                <h3 className="committe-details">Dr. Bharathi P T, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Bhargavi K, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Chandrashekar H M, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Chandrika Nataraj, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Dhruvakumar T, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Gayathri S, JSS Science and Technology University</h3>
                <h3 className="committe-details">Dr. Harshalatha Y, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Jagadamba G, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. K Viswanath, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Kavitha H, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Keshava Murthy G N, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Kiranmayi G R, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Madhu B M, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Mallikarjun B C, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Nagaratna Chittaragi, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Narasimhamurthy K C, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Puneeth Kumar T R, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Purushottama T L, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Roopa S, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. S R Manohara, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. S. R. Nirmala, Gauhati University</h3>
                <h3 className="committe-details">Dr. Shashikala B N, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Sheela S J, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Sridhar H S, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Sujatha M N, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Sunitha N R , SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Usha L, SIT, Tumkur</h3>
                {/* <h3 className="committee-details">Dr. Vaishali Patil, International Institute of Information Technology,Pune</h3> */}
                {/* <h3 className="committee-details">Dr. Veena Thenkanidiyoor , NIT,Goa</h3> */}
                <h3 className="committe-details">Dr. Venkatesh Murthy B T, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Vinayaka K U, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr.Rashmi Aradhya, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr.Seema B Hegde, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. G Manjula,GSSS Institute Of Engineering And Technology, Mysore </h3>
                <h3 className="committe-details">Dr. Geetha R S, BMSCE, Bangalore</h3>
                <h3 className="committe-details">Dr. H Kumaraswamy, RVCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Indira K, MSRIT, Bangalore</h3>
                {/* <h3 className="committee-details">Jayadevappa, JSSATE, Bengaluru</h3> */}
                <h3 className="committe-details">Dr. jyothirmayi Mysore, MSRIT, Bangalore</h3>
                <h3 className="committe-details">Dr. Kalpana R, BMSCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Kariyappa B S, RVCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Kendaganna S, RVCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Lakshmi KP, BMSCE, Bangalore</h3>
                {/* <h3 className="committee-details">Lakshmi Shrinivasan, MSRIT</h3> */}
                <h3 className="committe-details">Dr. M Chandrashekhar, SSIT, Tumkur</h3>
                <h3 className="committe-details">Dr. M Rajeswari, BIT, Bangalore</h3>
                {/* <h3 className="committee-details">M S Suma, BMSCE</h3> */}
                {/* <h3 className="committee-details">Dr MADHU B M, SIT</h3> */}
                <h3 className="committe-details">Dr. Mallikarjunaswamy M S, Sri Jayachamarajendra College of Engineering, Mysuru</h3>
                <h3 className="committe-details">Dr. Manjunath Sastry, SIT, Tumkur, Tumkur</h3>
                <h3 className="committe-details">Mr. Raveesh Siddaramaiah, SIT, Tumkur</h3>
                <h3 className="committe-details">Mr. Ravi H K, SIT, Tumkur</h3>
                <h3 className="committe-details">Mrs. Mala S, SIT, Tumkur</h3>
                <h3 className="committe-details">Mrs. Shilpashree P S, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Nagamani K, RVCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Nagaraju P, RVCE, Bangalore</h3>
                {/* <h3 className="committee-details">Narendra K C, NMAM Institute of Technology</h3> */}
                <h3 className="committe-details">Dr. Naveen Kumar, Vidyavardhaka College of Engineering</h3>
                <h3 className="committe-details">Dr. Parimala P, MSRIT, Bangalore</h3>
                <h3 className="committe-details">Dr. Poornima G, BMSCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Prakash Biswagar, RVCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Prasad, RVCE, Bangalore</h3>
                {/* <h3 className="committee-details">Prasanna Kumar M K, BMS college of Engineering</h3> */}
                <h3 className="committe-details">Dr. Prashanth C R, Dr. Ambedkar Institute of Technology, Bangalore</h3>
                <h3 className="committe-details">Dr. Premananda B S, RVCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Radhakrishna Bhat, Manipal Institute of Technology, Manipal</h3>
                {/* <h3 className="committee-details">Raghavendra Prasad, R V College of Engineering Bangalore</h3> */}
                {/* <h3 className="committee-details">Rajeshwari Hegde, BMS College of Engineering</h3> */}
                <h3 className="committe-details">Dr. Rajeshwari Siddarameswara, SIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Renu Madhavi C H, RVCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Renukalatha, SSIT, Tumkur</h3>
                <h3 className="committe-details">Dr. Shashidhar Koolagudi, National Institute of Technology Karnataka</h3>
                <h3 className="committe-details">Dr. Shivakumar Gundappa, Malnad College of Engineering, Hassan</h3>
                <h3 className="committe-details">Dr. Shobha Shankar, Vidyavardhaka College  of Engineering, Mysore</h3>
                <h3 className="committe-details">Dr. Shrikant Joshi, Vishwakarma Institute of Information Technology Pune</h3>
                <h3 className="committe-details">Dr. Shrikant Mehre, IIT Kharagpur</h3>
                <h3 className="committe-details">Dr. Suresh N, SSIT, Tumkur</h3>
                {/* <h3 className="committee-details">Suryakanth Gangashetty, K  L University Vaddeswaram, Andhra Pradesh L University Vaddeswaram, Andhra Pradesh</h3> */}
                <h3 className="committe-details">Dr. Uma B V, RVCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Usha Rani K R,RVCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Usha Rani K R, RVCE, Bangalore</h3>
                <h3 className="committe-details">Dr. Vanitha K M, MSRIT, Bangalore</h3>
                <h3 className="committe-details">Dr. Vijayalakshmi K, BMSCE, Bangalore</h3>
                {/* <h3 className="committee-details">Vikram C M, Arizona State University</h3> */}
                <h3 className="committe-details">Dr. Vishalakshi Prabhu, RVCE, Bangalore</h3>

            </div>
        </div>
        <div className='footer'>
            <MdOutlineCopyright className='copyright'/> 
            <h2>Copyrights by IEEE SIT SB</h2>
        </div>
    </section>
  )
}
