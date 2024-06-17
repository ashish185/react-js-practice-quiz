type WelcomeProps = {
    lang?: string
}

const Welcome = (props: WelcomeProps) => {
    return (
        <div>Welcome {props.lang}</div>
    )
}
export default Welcome