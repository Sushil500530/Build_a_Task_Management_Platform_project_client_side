

const TaskSolved = () => {
  
    return (
        <div className="my-12">
            <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-center">How to Solve it?</h1>
            <div className="flex flex-col lg:flex-row gap-8 mt-12">
                <div className="w-full lg:w-1/2 h-[55vh] ">
                    <h1 className="text-2xl font-bold text-center">Steps of Task....</h1>
                    <p className="text-center">
                        Effective task management involves a combination of planning, organization, prioritization, and execution. Here's a step-by-step guide to help you solve any task management challenge:
                    </p>
                    <div className="space-y-3">
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                <ul className="list-disc ml-6">
                                    <li>List Your Tasks</li>
                                </ul>
                            </div>
                            <div className="collapse-content">
                                <p>Start by creating a comprehensive list of all the tasks you need to accomplish. Use a task management tool, a notebook, or any method that works best for you.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                <ul className="list-disc ml-6">
                                    <li>Prioritize Tasks</li>
                                </ul>
                            </div>
                            <div className="collapse-content">
                                <p>Determine the importance and urgency of each task. Use prioritization methods such as the Eisenhower Matrix (urgent-important matrix) to categorize tasks into four quadrants: urgent and important, important but not urgent, urgent but not important, and neither urgent nor important.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                <ul className="list-disc ml-6">
                                    <li> Set SMART Goals</li>
                                </ul>
                            </div>
                            <div className="collapse-content">
                                <p>Define specific, measurable, achievable, relevant, and time-bound (SMART) goals for each task. This will provide clarity and help you stay focused.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                <ul className="list-disc ml-6">
                                    <li>Use Task Management Tools</li>
                                </ul>
                            </div>
                            <div className="collapse-content">
                                <p>Take advantage of task management tools and apps to keep your tasks organized. Many tools offer features like due dates, reminders, and collaboration options.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                <ul className="list-disc ml-6">
                                    <li>Continuous Improvement</li>
                                </ul>
                            </div>
                            <div className="collapse-content">
                                <p>Reflect on your task management process regularly. Identify areas for improvement and experiment with different techniques to find what works best for you.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-[55vh]">
                    <iframe className="h-full w-full" src="https://www.youtube.com/embed/Ng56fJ1cAWk" title="BlackLine Task Management Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    {/* <video className="h-full w-full rounded-lg" controls>
                        <source src="https://youtu.be/Ng56fJ1cAWk" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                </div>
            </div>
        </div>
    );
};

export default TaskSolved;