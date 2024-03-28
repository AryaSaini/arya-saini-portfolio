function Contact() {
    return (

        <div>

            <h1>Contact Me</h1>
            
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="6215dc33-ea1f-46bd-8c2d-4aab6b0d5ec2" />
                <input name="name" type="text" placeholder="Name" />
                <input name="email" type="email" placeholder="Email" />
                <textarea name="message" cols="30" rows="10" placeholder="" />
                <button>Send</button>
            </form>

        </div>
    )
}

export default Contact