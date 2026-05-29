"use client";

import { useState } from "react";
import Certificates from "./components/Certificates";


const data = {
  es:{
    greeting:"Hola, soy",
    role:"Ingeniero en Sistemas Computacionales",
    desc:"Ingeniero en Sistemas Computacionales con experiencia en logística, análisis de datos, administración de inventarios, KPI, automatización de procesos y tecnologías modernas enfocadas en infraestructura y desarrollo web.",
    about:"Sobre mí",
    aboutText:"Profesional orientado a resultados con experiencia en operaciones, tecnología y mejora continua. He trabajado liderando procesos logísticos, control administrativo, análisis de información y optimización de inventarios en empresas nacionales. Actualmente enfocado en fortalecer mi perfil como Ingeniero en Sistemas Computacionales, integrando conocimientos en Linux, scripting Bash, SQL, Docker, desarrollo web y soluciones modernas en la nube. Participante reconocido en Tijuana Innovadora 2012 dentro del panel de Excelencia Organizacional sobre modelos de negocio innovadores.",
    projects:"Proyectos",
    skills:"Habilidades Técnicas",
    experience:"Experiencia Laboral",
    education:"Educación",
    certificates:"Certificaciones",
    contact:"Contacto",
    download:"Descargar CV",
    contactBtn:"Contactarme",
    university:"Ingeniería en Sistemas Computacionales - Universidad Suiza ISU. Ingeniero en Sistemas Computacionales con una formación integral que abarca el desarrollo de software, la gestión de bases de datos y la arquitectura de redes informáticas. Capacitado para diseñar soluciones digitales escalables, implementar protocolos de ciberseguridad y liderar proyectos de transformación digital alineados a los objetivos del negocio. Profesional analítico con sólido pensamiento lógico-matemático orientado a optimizar infraestructura tecnológica y resolver problemas complejos con eficiencia operativa.",
    projectTitle:"Proyecto Personal - Kalan",
    projectDesc:"Proyecto web personal enfocado en diseño moderno, experiencia visual e integración de tecnologías actuales utilizando Vercel, Next.js y herramientas modernas de desarrollo.",
    certLinux:"Linux Bash Scripting",
    experiences:[
      ["Jefe de Logística","Maniobra de Precisión (2024-2026)","Coordinación logística de maquinaria industrial a nivel nacional desde México y Estados Unidos, incluyendo programación de rutas, seguimiento operativo, control documental y supervisión de entregas para garantizar cumplimiento en tiempos y procesos administrativos."],
      ["Monitoreo y Control Administrativo","Grupo ESD (2023-2024)","Monitoreo y control administrativo mediante análisis de datos e Indicadores Clave de Desempeño (KPI), optimizando procesos operativos, inventarios y seguimiento de incidencias para mejorar la eficiencia organizacional."],
      ["Gerente de Inventarios / Auditor","Princo (2016-2023)","Administración y supervisión de múltiples almacenes utilizando sistemas de planificación empresarial (ERP), auditorías operativas, control de inventarios, seguimiento logístico y análisis de diferencias para mejorar precisión y control administrativo."],
      ["Almacén y Compras","Sukarne (2015-2016)","Gestión de inventarios, abastecimiento y procesos de compras, asegurando control operativo, organización de materiales y optimización logística dentro de almacenes y áreas de producción."],
      ["Supervisor Call Center","Z Gas (2012-2014)","Supervisión operativa de personal y atención al cliente mediante monitoreo de Indicadores Clave de Desempeño (KPI), seguimiento de incidencias y optimización de tiempos de respuesta para mejorar calidad del servicio."],
      ["Tecnología e Innovación","UDRONES Robotics Creations (2012-2013)","Ensamblaje de drones y aviones tecnológicos, testing, validación y diagnóstico de equipos autónomos. Integración de hardware, soldadura de placas autónomas y troubleshooting de componentes electrónicos dentro de entornos orientados a innovación tecnológica."]
    ]
  },
  en:{
    greeting:"Hi, I'm",
    role:"Computer Systems Engineer",
    desc:"Computer Systems Engineer with experience in logistics, data analysis, inventory administration, KPI management, process automation and modern technologies focused on infrastructure and web development.",
    about:"About Me",
    aboutText:"Results-oriented professional with experience in operations, technology and continuous improvement. I have led logistics processes, administrative control, data analysis and inventory optimization for national companies. Currently focused on strengthening my profile as a Computer Systems Engineer by integrating Linux, Bash scripting, SQL, Docker, web development and cloud technologies. Recognized participant during Tijuana Innovadora 2012 in the Organizational Excellence panel focused on innovative business models.",
    projects:"Projects",
    skills:"Technical Skills",
    experience:"Work Experience",
    education:"Education",
    certificates:"Certificates",
    contact:"Contact",
    download:"Download CV",
    contactBtn:"Contact Me",
    university:"Computer Systems Engineering - Swiss University ISU. Computer Systems Engineer with comprehensive training in software development, database management and network architecture. Skilled in scalable digital solutions, cybersecurity protocols and digital transformation projects aligned with business objectives. Analytical professional focused on infrastructure optimization and operational efficiency.",
    projectTitle:"Personal Project - Kalan",
    projectDesc:"Personal web project focused on modern design, visual experience and integration of current technologies using Vercel, Next.js and modern development tools.",
    certLinux:"Linux Bash Scripting",
    experiences:[
      ["Head of Logistics","Maniobra de Precisión (2024-2026)","Coordination of industrial machinery deliveries across Mexico and the United States, operational tracking, logistics planning and delivery optimization."],
      ["Administrative Monitoring and Control","Grupo ESD (2023-2024)","Data analysis, operations monitoring, inventory optimization and KPI tracking to improve administrative processes."],
      ["Inventory Manager / Auditor","Princo (2016-2023)","Management of multiple warehouses, ERP implementation, internal audits and logistics process supervision."],
      ["Warehouse and Purchasing","Sukarne (2015-2016)","Inventory control, purchasing management and operational process improvement."],
      ["Call Center Supervisor","Z Gas (2012-2014)","Team supervision, KPI analysis, customer service and response optimization."],
      ["Technology & Innovation","UDRONES Robotics Creations (2012-2013)","Assembly of drones and aircraft systems, autonomous equipment testing, diagnostics and validation. Hardware integration, autonomous board soldering and troubleshooting of electronic components within innovation-focused technology environments."]
    ]
  }
}

const skills = ["C++","SQL","Python","Linux","Bash Scripting","Docker","Git/GitHub","Node.js","Next.js","Vercel","Supabase","Cisco","Windows Server","VSCode"];

export default function Home(){
 const [lang,setLang] = useState("es");
 const t = data[lang as keyof typeof data];

 return(
  <div className="container">
   <button className="lang" onClick={()=>setLang(lang==="es"?"en":"es")}>
    {lang==="es"?"English":"Español"}
   </button>

   <section className="hero">
    <div className="card cert-card">
      <img src="/profile.jpg" className="profile"/>
    </div>

    <div>
      <h1 className="title">{t.greeting}<br/><span className="blue">Jesús Caín</span></h1>
      <h2 style={{fontSize:"38px",marginTop:"20px"}}>{t.role}</h2>
      <p className="subtitle">{t.desc}</p>

      <div className="buttons">
        <div className="hero-buttons">

<a
href={lang === "es"
? "/CV_Jesus_Cain_ES.pdf"
: "/CV_Jesus_Cain_EN.pdf"}
download
className="btn primary"

>


{t.download}


  </a>

<a
href="#contact"
className="btn primary"

>


{t.contactBtn}


  </a>

</div>

      </div>
    </div>
   </section>

   <section className="section">
    <h2>{t.about}</h2>
    <div className="card cert-card">
      <p className="subtitle">{t.aboutText}</p>
    </div>
   </section>

   <section className="section">
    <h2>{t.projects}</h2>
    <div className="card exp">
      <h3>{t.projectTitle}</h3>
      <p className="subtitle">{t.projectDesc}</p>
      <a
        href="https://kalan-chi.vercel.app/"
        target="_blank"
        className="btn primary"
        style={{marginTop:"20px",display:"inline-block"}}
      >
        {lang === 'es' ? 'Ver Proyecto' : 'View Project'}
      </a>
    </div>
   </section>

   <section className="section">
    <h2>{t.skills}</h2>
    <div className="grid">
      {skills.map((skill)=>(
        <div className="skill badge" key={skill}>
          <h3>{skill}</h3>
          <div className="bar"><div className="fill" style={{width:"90%"}}></div></div>
        </div>
      ))}
    </div>
   </section>

   <section className="section">
    <h2>{t.experience}</h2>
    {t.experiences.map((exp,index)=>(
      <div className="card exp" key={index}>
        <h3>{exp[0]}</h3>
        <p className="subtitle">{exp[1]}</p>
        <p className="subtitle">{exp[2]}</p>
      </div>
    ))}
   </section>

   ```tsx id="5ih4m3"
<section className="section">
  <h2>{t.education}</h2>

  <div className="card cert-card">

    <h3
      style={{
        fontSize:"26px",
        fontWeight:"700",
        marginBottom:"18px",
        color:"#fff"
      }}
    >
      {lang === "es"
        ? "Ingeniería en Sistemas Computacionales"
        : "Computer Systems Engineering"}
    </h3>

    <p
      style={{
        color:"#3b82f6",
        fontWeight:"600",
        marginBottom:"25px"
      }}
    >
      {lang === "es"
        ? "Universidad Suiza ISU"
        : "Swiss University ISU"}
    </p>

    <p
      className="subtitle"
      style={{
        lineHeight:"1.9",
        marginBottom:"25px"
      }}
    >
      {lang === "es"
        ? "Ingeniero en Sistemas Computacionales con formación integral en desarrollo de software, bases de datos, arquitectura de redes, infraestructura tecnológica y transformación digital. Capacitado para diseñar soluciones escalables, optimizar procesos y resolver problemas complejos mediante tecnologías modernas."
        : "Computer Systems Engineer with comprehensive training in software development, databases, network architecture, IT infrastructure and digital transformation. Skilled in scalable solutions, process optimization and solving complex problems using modern technologies."}
    </p>

    <div
      style={{
        borderTop:"1px solid rgba(255,255,255,.08)",
        paddingTop:"20px"
      }}
    >

      <h4
        style={{
          marginBottom:"18px",
          color:"#3b82f6",
          fontSize:"18px"
        }}
      >
        {lang === "es"
          ? "Tecnologías y Áreas de Enfoque"
          : "Technologies & Focus Areas"}
      </h4>

      <div
        style={{
          display:"flex",
          flexWrap:"wrap",
          gap:"12px"
        }}
      >

        {[
          "React",
          "Next.js",
          "Linux",
          "SQL",
          "Docker",
          "GitHub",
          "Bash",
          "Cloud",
          "Redes",
          "Troubleshooting",
          "Infraestructura TI",
          "Automatización"
        ].map((item)=>(
          <span
            key={item}
            style={{
              background:"#111827",
              border:"1px solid rgba(59,130,246,.25)",
              padding:"10px 16px",
              borderRadius:"12px",
              fontSize:"14px",
              color:"#dbeafe"
            }}
          >
            {item}
          </span>
        ))}

      </div>

    </div>

  </div>
</section>
```


   <section className="section" id="contact">
    <h2>{t.contact}</h2>

    <div
      className="card"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "20px",
        textAlign: "center",
        alignItems: "center"
      }}
    >
      <div>
        <h3 style={{marginBottom:"10px",color:"#3b82f6",fontSize:"22px"}}>
          Email
        </h3>

        <p className="subtitle">
          cain_gtz93@hotmail.com
        </p>
      </div>

      <div>
        <h3 style={{marginBottom:"10px",color:"#3b82f6",fontSize:"22px"}}>
          {lang === "es" ? "Teléfono" : "Phone"}
        </h3>

        <p className="subtitle">
          664 442 75 62
        </p>
      </div>
    </div>
   </section>
  
<section className="section">
  <h2>{lang === "es" ? "Certificaciones" : "Certifications"}</h2>

  <div className="grid">
    <div className="card cert-card">
      <h3>Linux Unhatched</h3>
      <p className="subtitle">Cisco Networking Academy</p>

      <a
        href="/certificates/linux.pdf"
        target="_blank"
        className="btn cert-btn"
      >
        {lang === "es" ? "Ver Certificado" : "View Certificate"}
      </a>
    </div>

    <div className="card cert-card">
      <h3>Python Programming</h3>
      <p className="subtitle">Domestika</p>

      <a
        href="/certificates/python.pdf"
        target="_blank"
        className="btn cert-btn"
      >
        {lang === "es" ? "Ver Certificado" : "View Certificate"}
      </a>
    </div>

    <div className="card cert-card">
      <h3>Docker en Acción</h3>
      <p className="subtitle">Docker Foundations</p>

      <a
        href="/certificates/docker.pdf"
        target="_blank"
        className="btn cert-btn"
      >
        {lang === "es" ? "Ver Certificado" : "View Certificate"}
      </a>
    </div>
  </div>
</section>

</div>
 )
}
