import ReactPlayer from "react-player";
import "../../scss/pages/Link/Link.scss";
import VideoLink from "../../assets/img/poster-studio.jpg";
import PhotoLink from "../../assets/img/poster-about.jpg";
import HeadPhones from "../../assets/img/photo-build.jpg";
export function LinkPage() {
	return (
		<div className="Link">
			<div className="PlayTogethereCtrl">
				<div className="PlayTogethere">
					<h1 className="LinkName">Link</h1>
					<h1 className="Poppy">Play Together</h1>
				</div>
			</div>
			<div className="LinkStrangeTextCtrl">
				<div className="LinkStrangeText">
					<p>
						With acoustic instruments, playing in time comes naturally. You can
						jump in when the time’s right, and everyone keeps their flow.
						Playing together with electronic instruments hasn’t always been so
						easy. Now Link makes it effortless.
					</p>
					<p>
						Link is a technology that keeps devices in time over a local
						network, so you can forget the hassle of setting up and focus on
						playing music. Link is now part of Live, and also comes as a
						built-in feature of other software and hardware for music making.
					</p>
					<a href="">Check out the latest Link-enabled products</a>
				</div>
				<div className="WorkLinks">
					<ReactPlayer
						height="492px"
						width="800px"
						className="Linkvideo"
						url="https://youtu.be/Fjb4U-cUGSE"
						light={<img src={PhotoLink} height="492px" width="800px" alt="" />}
					></ReactPlayer>
					<h3
						style={{ fontWeight: "490", fontSize: "14px", marginLeft: "40px" }}
					>
						Learn how Link works{" "}
					</h3>
				</div>
			</div>
			<div className="Connection">
				<div className="LaptopsCtrl">
					<div className="Laptops"></div>
				</div>
				<div className="Blackscreen">
					<div className="BlackscreenText">
						<h1>Join the session</h1>
						<p>
							Hop on to the same network and jam with others using multiple
							devices running Link-enabled software. While others play, anyone
							can start and stop their part; or start and stop multiple Link-
							running applications at the same time. And anyone can adjust the
							tempo and the rest will follow. No MIDI cables, no installation,
							just free-flowing sync that works.
						</p>
					</div>
				</div>
			</div>
			<div className="LinkHelps">
				<div className="HelpViaApps">
					<h1>With Live and beyond</h1>
					<p>
						People make music using a range of instruments, so Link helps you
						play together using a range of devices. A growing number of music
						applications have Link built in, which means anyone on the same
						network can play them in time with Live. You can even use Link
						without Live in your setup: play Link- enabled software in time
						using multiple devices, or multiple applications on the same device.
					</p>
				</div>
				<div className="AppsInStd">
					<ReactPlayer
						url="https://youtu.be/E5gKYx3EzW0"
						height="525px"
						width="933px"
						light={<img src={VideoLink} height="525px" width="933px" alt="" />}
					></ReactPlayer>
					<h1>Bring apps into your studio</h1>
				</div>
			</div>
			<div className="ForDevelopers">
				<div className="PurpleSqCtrl">
					<div className="PurpleSq">
						<h1>Build Link into your application</h1>
						<p>
							Explore new possibilities in your own software – add Link support.
						</p>
						<a href="">Check out our info for developers</a>
						<h3>Subscribe to the newsletter</h3>
						<p>
							Sign up for the Link developer newsletter to receive all the
							latest Link news.
						</p>
						<input type="tei" placeholder="Email Address" />
						<button>Subscribe</button>
					</div>
				</div>
				<div className="HeadPhonesCtrl">
					<div className="HeadPhones"></div>
				</div>
			</div>
		</div>
	);
}
