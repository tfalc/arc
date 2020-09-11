function appArc(props) {
    const [dataHora, setTempo ] = useState('');
    return(
        <>
        <input className="dataHoraInput" placeholder="dataHora" onChance={e => console.log(e.target.value)} />
        </>
    );
}

export default appArc;