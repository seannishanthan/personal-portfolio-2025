function Footer(){
    return (
        <div className="footer">
            <p className="header">Thanks for visiting!</p>
            <p className="msg1"> If you would like to connect or have any questions feel free to reach out at <a href="mailto::seannishanthan@gmail.com">seannishanthan@gmail.com</a></p>
            <p className="msg2">Made with <i class="fa-brands fa-react"></i> by Sean Nishanthan</p>
            <p className="rights">&copy; {new Date().getFullYear()} Sean Nishanthan | All Rights Reserved</p>
        </div>
    )
}

export default Footer