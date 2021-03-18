import React, { useEffect, useState } from 'react';
import IGuide from 'models/IGuide';
import useStyles from './styles';
import { useParams } from 'react-router-dom';
// const guidePics = '../../assets/guide/'

const Guide = (props: { guide: IGuide }) => {
    const [state, setstate] = useState<any>()
    const classes = useStyles();
    const {source} = useParams<{source:string}>();

    useEffect(() => {
        import("../../assets/guide/" + source).then((data) => setstate(data))

    }, [])
    return (
        <div className={classes.shadowDiv}>
            <img src={state !== undefined ? state?.default : ""} style={{ minHeight: 200, width: "100%", borderRadius: 25,height: 'auto' }} />
        </div>
    )
}
export default Guide;