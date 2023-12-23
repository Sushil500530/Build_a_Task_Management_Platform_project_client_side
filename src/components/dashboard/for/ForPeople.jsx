import { Rating } from "@smastrom/react-rating";
import developer from '../../../assets/image/for/developer.png';
import graphiscer from '../../../assets/image/for/graphics-designer-.jpg';
import bangker from '../../../assets/image/for/Bankers.jpg';
import corporate from '../../../assets/image/for/corporate professionals.jpg'
import dataScience from '../../../assets/image/for/data-science.jpg';
import digital from '../../../assets/image/for/digital-marketer.png';
import education from '../../../assets/image/for/education.jpg';

const ForPeople = () => {
    return (
        <div className="my-12">
            <h1 className="text-4xl font-bold text-center">For whom is this website for?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5 mt-8">
                <div className="card bg-base-100 hover:shadow-xl border  cursor-pointer">
                    <figure className="w-full h-[300px]">
                        <img src={developer} alt="developer" className="rounded-xl w-full h-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Developer</h2>
                        <p>A developer is a technology professional who works on, builds and creates software, websites, applications and other systems.</p>
                        <div className="card-actions flex items-center justify-between">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>

                            </div>
                            <a href="https://www.coursera.org/articles/web-developer" target="_blank">
                                <button className="bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 btn text-white">Show More</button></a>
                        </div>
                        <span className="-mt-2">
                            <Rating
                                style={{ maxWidth: 180, height: 27, color: '#f7bd16', }}
                                value={5}
                                readOnly
                            />
                        </span>
                    </div>
                </div>
                <div className="card bg-base-100 hover:shadow-xl border  cursor-pointer">
                    <figure className="w-full h-[300px]">
                        <img src={dataScience} alt="dataScience" className="rounded-xl w-full h-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Data Scientist</h2>
                        <p>Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices </p>
                        <div className="card-actions flex items-center justify-between">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>

                            </div>
                            <a href="https://www.mastersindatascience.org/careers/data-scientist/" target="_blank">
                                <button className="bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 btn text-white">Show More</button></a>
                        </div>
                        <span className="-mt-2">
                            <Rating
                                style={{ maxWidth: 180, height: 27, color: '#f7bd16', }}
                                value={4.5}
                                readOnly
                            />
                        </span>
                    </div>
                </div>
                <div className="card bg-base-100 hover:shadow-xl border  cursor-pointer">
                    <figure className="w-full h-[300px]">
                        <img src={graphiscer} alt="graphiscer" className="rounded-xl w-full h-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Graphics Designer</h2>
                        <p>Graphics are visual images or designs on some surface, such as a wall, canvas, screen, paper, or stone, to inform, illustrate, or entertain.</p>
                        <div className="card-actions flex items-center justify-between">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>

                            </div>
                            <a href="https://www.betterteam.com/web-graphic-designer-job-description" target="_blank">
                                <button className="bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 btn text-white">Show More</button></a>
                        </div>
                        <span className="-mt-2">
                            <Rating
                                style={{ maxWidth: 180, height: 27, color: '#f7bd16', }}
                                value={5}
                                readOnly
                            />
                        </span>
                    </div>
                </div>
                <div className="card bg-base-100 hover:shadow-xl border  cursor-pointer">
                    <figure className="w-full h-[300px]">
                        <img src={bangker} alt="bangker" className="rounded-xl w-full h-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Banker</h2>
                        <p>A banker is a professional who advises clients on financial concerns and how to better manage their finances.</p>
                        <div className="card-actions flex items-center justify-between">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>

                            </div>
                            <a href="https://www.investopedia.com/terms/i/investmentbanker.asp" target="_blank">
                                <button className="bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 btn text-white">Show More</button></a>
                        </div>
                        <span className="-mt-2">
                            <Rating
                                style={{ maxWidth: 180, height: 27, color: '#f7bd16', }}
                                value={5}
                                readOnly
                            />
                        </span>
                    </div>
                </div>
                <div className="card bg-base-100 hover:shadow-xl border  cursor-pointer">
                    <figure className="w-full h-[300px]">
                        <img src={corporate} alt="corporate" className="rounded-xl w-full h-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Corporator</h2>
                        <p>A corporation is a legal entity created by individuals, stockholders, or shareholders, with the purpose of operating for profit.</p>
                        <div className="card-actions flex items-center justify-between">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>
                            </div>
                            <a href="https://www.dictionary.com/browse/corporator" target="_blank">
                                <button className="bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 btn text-white">Show More</button></a>
                        </div>
                        <span className="-mt-2">
                            <Rating
                                style={{ maxWidth: 180, height: 27, color: '#f7bd16', }}
                                value={4.5}
                                readOnly
                            />
                        </span>
                    </div>
                </div>
                <div className="card bg-base-100 hover:shadow-xl border  cursor-pointer">
                    <figure className="w-full h-[300px]">
                        <img src={digital} alt="digital" className="rounded-xl w-full h-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Digital Marketer</h2>
                        <p>A digital system is a something that represents information by using digits. Each digit represents a small amount of information</p>
                        <div className="card-actions flex items-center justify-between">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>

                            </div>
                            <a href="http://surl.li/omzlz" target="_blank">
                                <button className="bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 btn text-white">Show More</button></a>
                        </div>
                        <span className="-mt-2">
                            <Rating
                                style={{ maxWidth: 180, height: 27, color: '#f7bd16', }}
                                value={5}
                                readOnly
                            />
                        </span>
                    </div>
                </div>
                <div className="card bg-base-100 hover:shadow-xl border  cursor-pointer">
                    <figure className="w-full h-[300px]">
                        <img src={education} alt="education" className="rounded-xl w-full h-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Education</h2>
                        <p>Fundamentally, education socializes children into society by teaching cultural values and norms. It equips them with the skills needed to become productive</p>
                        <div className="card-actions flex items-center justify-between">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>

                            </div>
                            <a href="https://www.britannica.com/topic/education" target="_blank">
                                <button className="bg-gradient-to-r from-blue-800 to-blue-950 hover:text-green-500 btn text-white">Show More</button></a>
                        </div>
                        <span className="-mt-2">
                            <Rating
                                style={{ maxWidth: 180, height: 27, color: '#f7bd16', }}
                                value={5}
                                readOnly
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForPeople;