import images from '../images/images.png';
const Main = () => {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "18px",
            width: "400px",
            background: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>

            <div style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px", marginBottom: "10px" }}>
                <input
                    type="text"
                    placeholder="What's on your mind, Ayan Khurram"
                    style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        fontSize: "14px",
                        color: "#606770",
                        padding: "2px",
                        borderRadius: "15px",
                        backgroundColor: "#f0f2f5",
                        height: "35px",
                    }}
                />
            </div>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px"
            }}>
                <div style={{ display: "flex", alignItems: "center", cursor: "pointer", gap: "5px" }}>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeEtHNPezWvEttOQk6EOkJIXueRic5Ym8Wm55GJzlibxaXqR8FijKym94S4wG8sxkDpplvgBUatp_KTpMyA6Za1f" alt="Live Video" style={{ height: "20px", width: "20px" }} />
                    <span style={{ color: "#f02849", fontSize: "14px" }}>Live video</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", cursor: "pointer", gap: "5px" }}>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeGaa3XfuEVSlQbFO4KvZA26kBVQC4m7dx6QFVALibt3HmEyPlXI2XVMhbU-7xtLA4fsKI20FNWBQiar5bo6oREL" alt="Photo/Video" style={{ height: "20px", width: "20px" }} />
                    <span style={{ color: "#42b72a", fontSize: "14px" }}>Photo/video</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", cursor: "pointer", gap: "5px" }}>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeEvUwPBfckv5S4pJ4NmaE7pfPQ6N5_OUfV89Do3n85R9e8b6nX4eEXvDBP1DDqsSupXNcwJn8irsCsSSXRuucKP" alt="Feeling/Activity" style={{ height: "20px", width: "20px" }} />
                    <span style={{ color: "#f7b928", fontSize: "14px" }}>Feeling/activity</span>
                </div>
            </div>

            <div style={{
                borderTop: "1px solid #ddd",
                marginTop: "16px",
                paddingTop: "16px"
            }}>
                <div style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "16px",
                    maxWidth: "500px",
                    fontFamily: "Arial, sans-serif",
                    backgroundColor: "white",
                    margin: "16px auto"
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <img
                                src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/441527489_838319924995434_9207350163362003679_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=q2Ub6ZJXBnoQ7kNvgFBJCo3&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AhzbnuDLX3fLegq0-FHJR1h&oh=00_AYAXFEHj4QL5muM3RSsDFCyhg8oQajsR8YskpvaQOQcx8w&oe=6760BD06"
                                height={"40px"} alt="Profile"
                                style={{ borderRadius: "50%" }}
                            />
                            <div>
                                <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
                                    Saylani Mass I.T. Training
                                </h4>
                                <p style={{ margin: 0, fontSize: "12px", color: "#65676b" }}>
                                    11 December at 11:33
                                </p>
                            </div>
                        </div>
                        <div style={{ cursor: "pointer" }}>...</div>
                    </div>

                    <div style={{ marginTop: "16px" }}>
                        <p style={{ fontSize: "14px", color: "#050505" }}>
                            We're Hiring! 🚨
                            Saylani Welfare International Trust is looking for a Branch Incharge to join our team.
                            🔹 Qualification:
                            Graduation in B.Com or a related field
                            🔹 Experience:
                            Minimum 2 years
                            📧 Apply Now: Send your resume to careers@saylaniwelfare.com
                            #WeAreHiring #BranchIncharge #SaylaniCareers #JoinOurTeam #Hiring
                        </p>
                    </div>

                    <div
                        style={{
                            marginTop: "16px",
                            backgroundColor: "#f0f2f5",
                            height: "200px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                        }}
                    >
                        <img
                            src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/469751713_980518907442201_6743023686373065694_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Cfs35Oel4aYQ7kNvgHc4_pX&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=A-kU5woDmeWKuGtnQmrlgaF&oh=00_AYAJi1k7G_FpB-LY-YS_l8awZOag-nvVe4dEQQpB5ni6QQ&oe=6760C0E3"
                            alt="Post visual"
                            style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px" }}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: "16px",
                            borderTop: "1px solid #ddd",
                            paddingTop: "8px",
                        }}
                    >
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "#65676b",
                            }}
                        >
                            👍🏿 Like
                        </button>
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "#65676b",
                            }}
                        >
                            💬Comment
                        </button>
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "#65676b",
                            }}
                        >
                            <img src={images} alt="" height={"20px"} />Send
                        </button>
                    </div>
                </div>
            </div>
            <div style={{
                borderTop: "1px solid #ddd",
                marginTop: "16px",
                paddingTop: "16px"
            }}>
                <div style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "16px",
                    maxWidth: "500px",
                    fontFamily: "Arial, sans-serif",
                    backgroundColor: "white",
                    margin: "16px auto"
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <img
                                src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/441527489_838319924995434_9207350163362003679_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=q2Ub6ZJXBnoQ7kNvgFBJCo3&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AhzbnuDLX3fLegq0-FHJR1h&oh=00_AYAXFEHj4QL5muM3RSsDFCyhg8oQajsR8YskpvaQOQcx8w&oe=6760BD06"
                                height={"40px"} alt="Profile"
                                style={{ borderRadius: "50%" }}
                            />
                            <div>
                                <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
                                    Saylani Mass I.T. Training
                                </h4>
                                <p style={{ margin: 0, fontSize: "12px", color: "#65676b" }}>
                                    11 December at 11:33
                                </p>
                            </div>
                        </div>
                        <div style={{ cursor: "pointer" }}>...</div>
                    </div>

                    <div style={{ marginTop: "16px" }}>
                        <p style={{ fontSize: "14px", color: "#050505" }}>

                            ہنرمند نوجوان، ترقی یافتہ پاکستان!
                            <br />
                            𝐕𝐨𝐜𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐓𝐫𝐚𝐢𝐧𝐢𝐧𝐠 𝐏𝐫𝐨𝐠𝐫𝐚𝐦
                            Join Our Courses
                            https://forms.saylaniwelfare.com/
                            𝗝𝗼𝗶𝗻 𝗢𝘂𝗿 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗖𝗵𝗮𝗻𝗻𝗲𝗹👇
                            https://saylani.org/WhatsApp-Channel
                            𝗪𝗲𝗯𝘀𝗶𝘁𝗲:
                            http://saylaniwelfare.com
                            𝗖𝗮𝗹𝗹 𝗨𝗔𝗡: +92-21-111-729-526 | 0311 1729526
                            #Saylani #Vocational #TrainingProgram #SMIT #Rozgar #Success #JoinUs
                        </p>
                    </div>

                    <div
                        style={{
                            marginTop: "16px",
                            backgroundColor: "#f0f2f5",
                            height: "200px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                        }}
                    >
                        <img
                            src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/465183001_980434394117319_3187642306172646597_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0S6i1ymVJVYQ7kNvgHYQqHU&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=ApPEIu1z3_t3OSNh2kxQRag&oh=00_AYCbvrP7QZNzoFjEkuol2X85uo_3zLprUS7Vcju8c3GdhQ&oe=6760B596"
                            alt="Post visual"
                            style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px" }}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: "16px",
                            borderTop: "1px solid #ddd",
                            paddingTop: "8px",
                        }}
                    >
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "#65676b",
                            }}
                        >
                            👍🏿 Like
                        </button>
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "#65676b",
                            }}
                        >
                            💬Comment
                        </button>
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "#65676b",
                            }}
                        >
                            <img src={images} alt="" height={"20px"} />Send
                        </button>
                    </div>
                </div>
            </div>
            <div style={{
                borderTop: "1px solid #ddd",
                marginTop: "16px",
                paddingTop: "16px"
            }}>
                <div style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "16px",
                    maxWidth: "500px",
                    fontFamily: "Arial, sans-serif",
                    backgroundColor: "white",
                    margin: "16px auto"
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <img
                                src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/441527489_838319924995434_9207350163362003679_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=q2Ub6ZJXBnoQ7kNvgFBJCo3&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AhzbnuDLX3fLegq0-FHJR1h&oh=00_AYAXFEHj4QL5muM3RSsDFCyhg8oQajsR8YskpvaQOQcx8w&oe=6760BD06"
                                height={"40px"} alt="Profile"
                                style={{ borderRadius: "50%" }}
                            />
                            <div>
                                <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
                                    Saylani Mass I.T. Training
                                </h4>
                                <p style={{ margin: 0, fontSize: "12px", color: "#65676b" }}>
                                    11 December at 11:33
                                </p>
                            </div>
                        </div>
                        <div style={{ cursor: "pointer" }}>...</div>
                    </div>

                    <div style={{ marginTop: "16px" }}>
                        <p style={{ fontSize: "14px", color: "#050505" }}>

                            We’re Hiring! 🚨
                            Join our team as Deputy Manager Supply Chain in Quetta. If you have strong leadership skills and expertise in supply chain management, this is your chance to grow with us!
                            🔎 Eligibility Criteria:
                            Bachelor’s degree (MBA preferred)
                            5 to 10 years of relevant experience
                            📧 Apply Now: Send your resume to careers@saylaniwelfare.com
                            #WeAreHiring #SupplyChainManager #QuettaJobs #JoinOurTeam #Hiring #SupplyChainJobs

                        </p>
                    </div>

                    <div
                        style={{
                            marginTop: "16px",
                            backgroundColor: "#f0f2f5",
                            height: "200px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                        }}
                    >
                        <img
                            src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/469798763_979979860829439_7866069265227965245_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1m0kgr3LJNoQ7kNvgG-lr99&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=A4E1yHrZ6WLsGo1VmNG_6w_&oh=00_AYAYVIb_unhhKWNq7vCXqWcBKlTba2g3IoOHqdjQW5Fs-g&oe=6760C823"
                            alt="Post visual"
                            style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px" }}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: "16px",
                            borderTop: "1px solid #ddd",
                            paddingTop: "8px",
                        }}
                    >
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "#65676b",
                            }}
                        >
                            👍🏿 Like
                        </button>
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "#65676b",
                            }}
                        >
                            💬Comment
                        </button>
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "#65676b",
                            }}
                        >
                            <img src={images} alt="" height={"20px"} />Send
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Main