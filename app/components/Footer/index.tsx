import styles from './footer.module.css';

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    &copy;
    {` ${new Date().getFullYear()} jechoes · la`}
  </footer>
);

export default Footer;
