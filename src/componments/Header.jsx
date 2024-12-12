const Header = () => {
    return (
        <div
            style={{
                height: 50,
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px"
            }}
        >
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png"
                        alt="Facebook Logo"
                        style={{ height: 60, width: 60 }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search Facebook"
                        style={{
                            background: "#f0f2f5",
                            border: "none",
                            borderRadius: "50px",
                            color: "#abadaf",
                            fontSize: "16px",
                            height: "25px",
                            outline: "none",
                            padding: "10px",
                            width: "235px",
                        }}
                    />
                </div>
            </div>

            <div style={{ display: "flex", gap: "80px" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    style={{ cursor: "pointer", height: "28px", width: "28px" }}
                >
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    style={{ cursor: "pointer", height: "28px", width: "28px" }}
                >
                    <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"></path>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    style={{ cursor: "pointer", height: "28px", width: "28px" }}
                >
                    <path d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z"></path>
                </svg>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "50px",
                    justifyContent: "flex-end",
                    margin: "10px",
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{
                        borderRadius: "50%",
                        cursor: "pointer",
                        height: "28px",
                        width: "28px",
                    }}
                >
                    <path d="M0 96C0 78.3 14.3 64 32 64..." />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    style={{
                        borderRadius: "50%",
                        cursor: "pointer",
                        height: "28px",
                        width: "28px",
                    }}
                >
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{
                    borderRadius: "50%",
                    cursor: "pointer",
                    height: "28px",
                    width: "28px",
                }}><path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{
                    borderRadius: "50%",
                    cursor: "pointer",
                    height: "28px",
                    width: "28px",
                }}><path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"></path></svg>
            </div>
        </div>
    );
};

export default Header;
