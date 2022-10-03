import './PageContainer.css';

function PageContainer(props: { children: React.ReactNode }){
    return (<div className="PageContainer">
        {props.children}
    </div>);
}

export default PageContainer;