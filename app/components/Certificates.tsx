export default function Certificates() {
  return (
    <section className="mb-8 bg-gray-100 p-6 rounded">
      <h2 className="text-2xl font-bold mb-4">
        Certifications
      </h2>

      <div className="grid gap-4">

        <div className="card cert-card">
          <h3>Docker en Acción</h3>
          <p>12 mayo 2026</p>

          <a
            href="/certificates/docker.pdf"
            target="_blank"
            className="btn cert-btn"
          >
            View Certificate
          </a>
        </div>

        <div className="card cert-card">
          <h3>Introducción a Python</h3>
          <p>2 mayo 2026</p>

          <a
            href="/certificates/python.pdf"
            target="_blank"
            className="btn cert-btn"
          >
            View Certificate
          </a>
        </div>

        <div className="card cert-card">
          <h3>Linux Unhatched</h3>
          <p>14 mayo 2026</p>

          <a
            href="/certificates/linux.pdf"
            target="_blank"
            className="btn cert-btn"
          >
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}
