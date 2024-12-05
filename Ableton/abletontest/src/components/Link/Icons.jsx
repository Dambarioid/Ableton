import Cubasis from "../../assets/img/app-icon-cubasis.png";
import Aum from "../../assets/img/app-icon-aum.png";
export function Icons() {
	const IconsLinks = [
		"https://www.ableton.com/en/note/",
		"https://kymatica.com/apps/aum",
		"https://www.steinberg.net/cubasis/",
		"https://www.moogmusic.com/products/minimoog-model-d-synthesizer-app",
		"",
	];
	return (
		<ul>
			<li>
				{IconsLinks.map((el) => (
					<a href={el}>
						<img src="" alt="" />
					</a>
				))}
			</li>
		</ul>
	);
}
