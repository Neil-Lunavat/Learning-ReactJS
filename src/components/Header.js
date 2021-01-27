import Button from './Button'

const Header = ({ title, showForm, showAdd }) => {

    return (
        <header className="header">
            <h1>{ title }</h1>
            {
                showAdd ?
                <Button color='red' text='Close' onClick={showForm}/>
                :
                <Button color='green' text='Add' onClick={showForm}/>
            }
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header
