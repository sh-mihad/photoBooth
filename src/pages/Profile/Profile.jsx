import postImg from "../../assets/post-1.jpg";
import ProfileUserInfo from "./components/ProfileUserInfo";

export default function Profile() {
    return (
        <div class="main-container">
            <div class="profile-container">

                <ProfileUserInfo />

                <section>
                    <h3 class="font-semibold text-lg mb-4">Posts</h3>

                    <div class="grid grid-cols-3 gap-1">
                        <a href="./post-details.html">
                            <div class="relative">
                                <img src={postImg} alt="Post" class="w-full grid-image" />
                            </div>
                        </a>
                        <a href="./post-details.html">
                            <div class="relative">
                                <img src={postImg} alt="Post" class="w-full grid-image" />
                            </div>
                        </a>
                        <a href="./post-details.html">
                            <div class="relative">
                                <img src={postImg} alt="Post" class="w-full grid-image" />
                            </div>
                        </a>
                        <a href="./post-details.html">
                            <div class="relative">
                                <img src={postImg} alt="Post" class="w-full grid-image" />
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
