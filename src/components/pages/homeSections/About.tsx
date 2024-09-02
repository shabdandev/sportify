import scss from "./About.module.scss";

const About = () => {
  return (
    <section className={scss.About}>
      <div className="container">
        <div className={scss.content}>About</div>
      </div>
    </section>
  );
};

export default About;
