import { useLayoutEffect } from 'react';
import './App.css';
import { setupScrollAnimations } from './animations/scrollAnimations';

function App() {
	// useLayoutEffect garante que a animação seja montada após o DOM estar pronto
	useLayoutEffect(() => {
		setupScrollAnimations();
	}, []);

	return (
		<div className="App">
			<section className="sectionOne">
				<div className="corner corner-top-left"></div>
				<div className="corner corner-top-two-left"></div>
				<div className="corner corner-mid-left"></div>
				<div className="corner corner-mid-right"></div>

				<div className='arrow'></div>
				<div className='arrow-shadow'>
					<p>
						&#8595; Role para baixo &#8595;
					</p>
				</div>

				<div className="container-title">
					<h1>Samuel & Taciane</h1>
					<h3 className='typing'>Com imensa alegria convidam você para celebrar este dia especial</h3>
				</div>
			</section>


			<section className='sectionTwo'>
				<div className='container-img'>
					<img src='/assets/2.jpeg' alt='Imagem 01' style={{ width: "300px" }} />
				</div>
				<div className='textSectionTwo'>
					<p>
						Depois de tantos capítulos vividos,<b style={{color: "#b8860b"}}> chegou o momento</b> de unirmos nossas histórias para <b style={{color: "#b8860b"}}>sempre.</b>
						Será uma <b style={{color: "#b8860b"}}>honra</b> compartilhar este dia <b style={{color: "#b8860b"}}>inesquecível</b> ao seu lado.
					</p>
				</div>
				<div style={{width: "100%", display: 'flex', justifyContent: 'center', marginTop: "20px", marginBottom: "30px"}}>
					<div
						style={{
							width: "200px",
							height: "3px",
							background: "#b8860b",
							boxShadow: `
							0 3px 6px rgba(184,134,11,0.8),
							0 0 12px rgba(255,215,0,0.6)
							`
						}}
					></div>
				</div>
			</section>

			<section className="carrousel">
				<div className="content">
					{/* Primeira lista */}
					<img src="/assets/1.jpeg" alt="Imagem 01" />
					<img src="/assets/2.jpeg" alt="Imagem 02" />
					<img src="/assets/3.jpeg" alt="Imagem 03" />
					<img src="/assets/4.jpeg" alt="Imagem 04" />
					<img src="/assets/5.jpeg" alt="Imagem 05" />

					{/* Duplicação para loop perfeito */}
					<img src="/assets/1.jpeg" alt="Imagem 01" />
					<img src="/assets/2.jpeg" alt="Imagem 02" />
					<img src="/assets/3.jpeg" alt="Imagem 03" />
					<img src="/assets/4.jpeg" alt="Imagem 04" />
					<img src="/assets/5.jpeg" alt="Imagem 05" />
				</div>
			</section>


			<section className="sectionThree">
				<div className="details">
					<h2>Detalhes da Cerimônia</h2>

					<p><strong>📅 Data:</strong> 24 de Janeiro de 2026</p>
					<p><strong>⏰ Horário:</strong> 10h15 chegar com 15 min de antecedencia</p>
					<p><strong>📍 Local:</strong> Cartorio Umbará — Rua das Flores, 125 — São Paulo, SP</p>

					<p className='confirm'>
						Por favor, confirme sua presença até 23 de Janeiro de 2026.
					</p>
					<a
						href="https://wa.me/5541998333575?text=Ol%C3%A1%21%20Confirmo%20minha%20presen%C3%A7a%20no%20casamento%20do%20Samuel%20e%20Taciane%20%F0%9F%92%9A"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-whatsapp"
						>
						💬 Confirmar Presença
					</a>
				</div>
			</section>

			<div style={{ position: 'relative', width: '100%', height: '300px', marginBottom: '100px' }}>
				<div className='loc'>
					<iframe
						title="Localização do evento - Espaço Jardim das Acácias"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.990148740421!2d-49.2707906!3d-25.4366662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4692f5e49f7%3A0x45353bec9dc0b48!2sAv.%20Visc.%20de%20Guarapuava%20-%20Matriz%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1732655540000!5m2!1spt-BR!2sbr"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						loading="lazy"
						allowFullScreen={true}
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<a
						href="https://www.google.com/maps?q=R.+Izaac+Ferreira+da+Cruz,4200-,Sítio+Cercado,+Curitiba,+PR"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Abrir localização do evento no Google Maps"
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							zIndex: 5,
							background: 'transparent',
						}}
					></a>
				</div>
				<div className='loc'>
					<p style={{ marginTop: "20px", textAlign: 'center' }}>
						Clique no mapa para abrir no Google Maps
					</p>
				</div>
			</div>

		</div>
	);
}

export default App;
