import { useRef } from 'react';
import styles from './style.module.scss';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import { useInView, motion } from 'framer-motion';
import { main_description } from '@/common/lib/constants';

export default function Description() {
    const description = useRef(null);
    const isInView = useInView(description);
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    main_description.split(` `).map((word, index) => {
                        return (
                            <span key={index} className={styles.mask}>
                                <motion.span variants={slideUp} custom={index} animate={isInView ? `open` : `closed`} key={index}>
                                    {word}
                                </motion.span>
                            </span>
                        )
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                    The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
