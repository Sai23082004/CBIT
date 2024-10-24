import { useEffect, useState } from "react"
import Navbar from "../navbar"



const DownloadPage = () =>
{
    const semisters = [
        "Under Graduate(B.Tech) (AUTONOMOUS) R23 Regulations"
        

    ]
    const semisterPaper = [
        
    [   "Linear Algebra & Calculus",
        "Chemistry",
        "Engineering Physics",
        "Communicative English",
        "Basic Electrical & Electronics Engineering",
        "Basic Civil & Mechanical Engineering",
        "Engineering Graphics" ,
        "Introduction to Programming"
    ], 
    
        
    ]
    const semisterPaperDownloads = [
    [
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
    
    
    
    
    ],





    ]
    const semisterPaperDownloadsPdfs = [
    [
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],

    ],
    
    ]



    {/* material section */ }
    const qb = [
        "Under Graduate(B.Tech) (AUTONOMOUS) R23 Regulations"

    ]
    const qbp = [
    [   "Data Structures",
        "Differential Equations & Vector Calculus",
        "Network Analysis",
        "Chemistry",
        "Engineering Physics",
        "Communicative English",
        "Basic Electrical & Electronics Engineering",
        "Basic Civil & Mechanical Engineering",
        "Engineering Graphics" ,
        "Engineering Mechanics",
        "Electrical Circuit Analysis-I"
    ],
    ]
    const qbd = [
    [
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
        ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
    ],
    
    ]
    const qbdf = [
    [
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
        ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],


    ],
    
    ]



    return (
        <div className="" style={{ overflowX: "hidden" }}>

            <div className="position-relative w-100">
                <Navbar />
                {/* imge */}

            </div>
            {/* question banks   */}
            <div className="my-5">
            <h1 className="text-center fw-bold" >1st Year 1st Semester   </h1>
            <h4 className="text-center fw-bold" >Common Subjects For All Branches   </h4>

                {
                    semisters.map((value, i) => {
                        return <div key={i}>
                            <Papers ind={i} data={semisterPaper || []} pdfFiles={semisterPaperDownloadsPdfs} data2={semisterPaperDownloads} value={value} />
                        </div>
                    })
                }

            </div>

            {/* materials   */}
            <div className="my-5">
                <h1 className="text-center fw-bold" >1st Year 2nd Semester  </h1>
                <h4 className="text-center fw-bold" >Common Subjects For All Branches   </h4>


                {
                    qb.map((value, i) => {
                        return <div key={i}>
                            <Papers ind={i} data={qbp || []} pdfFiles={qbdf} data2={qbd} value={value} />
                        </div>
                    })
                }
            </div>




            {/* footer  */}
            <div className="text-light p-lg-4" style={{ backgroundImage: `url("https://cbit.edu.in/wp-content/uploads/2023/05/footer.png")`, backgroundRepeat: 'repeat' }}>
                <div className="container-lg">
                    <div className="row p-5 text-dark">
                        <div className="col-md-2 col-sm-6 col-12">
                            <div className="d-flex align-items-center text-dark flex-column">
                                <img className="img-fluid" style={{ width: "15rem" }} src="https://cbit.edu.in/wp-content/uploads/2023/05/cbit.png" alt="" />
                                <p className="text-left">Chaitanya Bharathi Institute Of Technology - Proddatur in Y S R (Kadapa) District, Andhra Pradesh</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <h4 className="fw-bold py-4 ps-4 ">Important Links</h4>
                            <ul className="text-primary">
                                <li ><a className=" text-primary" href="https://cbit.edu.in/userfiles/link/AICTE_Mandatory%20Disclosures.pdf">AICTE Mandatory Disclosures</a></li>
                                <li><a href="https://cbit.edu.in/iic/" className="text-primary">IIC</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/nss/">NSS</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/student-achievements/">Student Achievements</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/iqac/faculty-achievements/">Faculty Achievements</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/student-welfare/">Student Welfare</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/downloads/">Downloads</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/committee/">Committee</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-6 col-12">
                            <h4 className="fw-bold py-4 ps-4">Academics</h4>
                            <ul className="text-primary">
                                <li><a className="text-primary" href="https://cbit.edu.in/admissions/">Admission Procedure</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/academic-calendar/">Academic Calendar</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/academic-council/">Academic Council</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/about/affiliations/">Affiliations</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/admissions/admission-form/">Admission Form</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/admissions/courses-offered/">Courses Offered</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/campus-life/">Campus Life</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/contact/">Contact</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/infrastructure/cafeteria/">Cafeteria</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 ms-md-4 col-sm-6 col-12">
                            <h4 className="fw-bold py-4">Get in touch</h4>
                            <div>
                                <p>Chaitanya Bharathi Institute Of Technology,</p>
                                <p>Vidya Nagar, Proddatur, YSR Kadapa (Dist.), Andhra Pradesh 516360,</p>
                                <p>Phone: <span className="text-primary">+91-7659807111</span></p>
                                <p>Email: <span className="text-primary"> info@cbit.edu.in</span></p>
                                <div className="d-flex gap-4">
                                    <a className="text-primary" href="https://cbit.edu.in/departments/">Departments</a>
                                    <a className="text-primary" href="https://cbit.edu.in/iqac/aqar/">AQAR</a>
                                    <a className="text-primary" href="https://cbit.edu.in/placements/">Placements</a>
                                    <a className="text-primary" href="https://cbit.edu.in/contact/">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-3" style={{ background: "#203764" }}>
                <div className="mx-auto text-center">
                    <img className="img-fluid" style={{ width: "5rem" }} src="https://cbit.edu.in/wp-content/uploads/2023/05/cbit.png" alt="" />
                    <p style={{ color: "#8A8A8E" }} className="text-center">
                        Copyright © 2024 www.cbit.edu.in | Designed 
                        <span style={{ color: "#1E77D1" }}> Shadow coders <img style={{ width: "1rem" }} className="img-fluid" src="https://www.briaux.com/briaux16.png" alt="" /></span>
                    </p>
                </div>
            </div>


        </div>
    )
}

const Papers = ({ data, value, ind, data2, pdfFiles }) => {
    const [open, setOpen] = useState(false)

    return <>

        <div className="mx-auto w-100 text-center gap-3">
            <div className=" p-2">
                <button onClick={() => setOpen(!open)} style={{ borderWidth: '2px', textTransform: 'uppercase', borderStyle: 'solid', borderColor: '#A52A2A', background: '#DEFDFF', borderRadius: '15px' }}
                    className="btn  p-3 hoverDoenloadBtn py-2 fw-semibold">
                    {value}
                </button>
            </div>
            <div>
                {
                    Array.isArray(data[ind]) ? <>
                        {
                            data[ind].map((value2, i2) => {
                                return <>
                                    <SemisterPaperDownloads data={data2 || [[]]} pdfFiles={pdfFiles} ind={ind} ind2={i2} value={value2} />
                                </>
                            })
                        } </> : null
                }
            </div>
        </div>

    </>
}

const SemisterPaperDownloads = ({ data, value, ind, ind2, pdfFiles }) => {
    const [open, setOpen] = useState(false)
    const p = ''

    return <>
        <div style={{}} className="row d-flex justify-content-center align-items-center mx-4">
            <button onClick={() => setOpen(!open)} className="text-center col-lg-6 d-flex justify-content-between mx-lg-5 mx-3 btn mt-2 p-2 fw-semibold" style={{ background: '#F2D1FF', }}>
                {value} <span>{open ? "-" : "+"}</span> </button>
            {/* value3.toUppercase.replace(" ","") */}
        </div>
        <div className="row d-flex justify-content-center align-items-center mx-4">
            {
                open ?
                    Array.isArray(data[ind][ind2]) ?
                        <>
                            {
                                data[ind][ind2].map((value3, i3) => {
                                    return <a href={pdfFiles[ind][ind2][i3]} download style={{ background: '#E6E6E6', }} className="text-primary  col-lg-6 mx-lg-5 mx-3 mt-1 p-2 py-1 fs-6">{value3}</a>
                                })
                            }
                        </>
                        : null : null
            }
        </div>

    </>

}
export default DownloadPage