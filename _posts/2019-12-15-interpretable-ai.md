---
layout: post
title: "Interpretability in AI Systems"
author: "Tori"
header-style: text
comments: true
tags: 
- Computer Science
---

Artificial intelligence (AI) and especially machine learning (ML) has seen rapid progress and wide applications in every possible aspect of people’s lives, ranging from movie recommendation and smart home voice assistants such as Amazon Alexa, to mortgage qualification and yet experimental self-driving cars. More and more people are enjoying a higher quality of life thanks to the incredible development of AI technologies in recent years.

However, AI nowadays is still *far* from perfect --- it can make mistakes, sometimes causing undesirable consequences and sometimes hard for people to understand. In 2016, Correctional Offender Management Profiling for Alternative Sanctions (COMPAS), a widely used software for criminal risk assessment, has been found to be racially biased against black defendants, predicting them to be twice as likely to recidivate compared to their white counterparts [1]. In addition, starting from 2015, scientists have discovered some weird behavior in AI: a human-imperceptible perturbation on an image can cause an AI to make a completely wrong decision on deciding what is inside the image.

![1215-1](/img/in-post/1215-1.png)

Source: <https://openai.com/blog/adversarial-example-research/>

Why are you doing this to us, my AI buddy? Aren’t you supposed to be nice and strong?

Well, honestly we don’t quite know why. Not only don’t *we* know, scientists don’t really know either. Indeed, many ML technologies have shown great promise in deciding *what* to do, but they stand quite dumb when it comes to *why*. A call for investigating “why” has arisen, and an interpretation of an AI decision becomes increasingly critical as we are incorporating more and more of them into the modern society. AI needs to be responsible for its own behavior as well, and its explanation is its best words. Interpretation and explanation will be used interchangeably hereafter.

## Frameworks for interpretability

The core question to be first discussed is, what do we want from AI interpretability? And this is no easy question as we are going to decompose it into several small questions to understand a bigger picture.

**Who are we?** Oh, we are normal people of course. But remember, it is not only us who are curious about what AI is doing, there are more stakeholders out there who are eager for an explanation. Basically there are four stakeholder communities [2]: developers who want to use the explanation to debug their AI products, theorists who want to understand the fundamental properties of AI, users like us who might hesitate on whether to act according to what AI has suggested and needs justification, and ethicists who care more about whether the AI is being fair, accountable and compliant with legislation. Different people have different requirements for AI explanations, and thus the interpretation can vary greatly in format and level of detail when it is presented to different communities. You don’t really want to be confused by a bunch of mysterious parameters, do you? But developers might be more than happy to see them.

**What should an interpretation look like?** A bunch of parameters might be elusive for the users, but can be rather informative to the developers. An explanation without doubt needs to be comprehensible enough for the target community to understand. But on the way to a comprehensible explanation, its fidelity to the original AI model might be compromised. AI is far too complicated for the citizens to understand, and simplification is almost inevitable for a general audience to grasp what is going on in that mystery. A *comprehensibility-fidelity dilemma* is standing right there, and it is difficult to achieve both at the same time. A balance has to be struck so that the details presented are sufficient but also not too overwhelming.

Besides comprehensibility and fidelity, another desired property for an explanation is interactivity [3]. As AI becomes also a part of our society, we need to be able to do interactive conversations with it regarding what it does, as one single explanation cannot address all users’ concerns and we might have follow-up questions for AI to answer further. This could introduce a dynamic balance between comprehensibility and fidelity, and reveal various user needs for the explanation. Some recent efforts have also been put into categorizing different explanation needs into a conceptual framework based on how humans do explanations and reasoning [4], and we will introduce it in a later section.

**Is this interpretation good for me?** Evaluation of an explanation is not an easy task. There is often neither directly measurable quantities nor established benchmarks for interpretability. Human evaluation has been essential in determining the quality of an explanation, which often includes criteria on simplicity, usefulness, coherence with prior belief, and generalizability [5]. This seems to work as a golden rule: to seek suggestions for improvement on explanations directly from the target users.

Herman in his work [6], however, argues that we should be wary of using merely human evaluations because humans have a strong bias towards simpler explanations. Instead of a *descriptive*explanation, they might be reduced to *persuasive* ones which incorporate user preferences and characteristics to appear convincing to the users. This raises another dilemma where it can become unethical to tweak the explanation to be less faithful to AI models but more powerful to increase user trust. We will discuss this further in the final section of this article.

## Methods for interpretation

Bearing in mind the guidelines we discussed above, we next turn to how an explanation should be developed in more technical details. In this section, we assume basic familiarity with AI and ML concepts from the readers.

**Dimensions of explanation strategies.** There have been tons of interpretability methods for different explanation needs, and we would like to categorize them by several dimensions to create a taxonomy.

A)   Transparent box versus black box. Transparent box is also known as explanation by design or inherently interpretable models. Linear models and decision trees typically fall into this category. In contrast, black box models are those not intuitively understandable and they are the most necessary for an explanation. This often includes the most notorious neural networks.

B)   Global explanation versus local explanation. Global explanation, or model explanation methods, aim at describing how the model generally works; while local explanation, or outcome explanation methods, aim at describing how the model makes decision for a particular input.

C)   Model-specific versus model-agnostic. Is the explanation method specific to a particular class of models, i.e. model-specific, or is it a universal method that is generally applicable to all models, i.e. model-agnostic? Prior knowledge of the model to be explained is a key dimension for this.

D)  Factual versus counterfactual. Factual explanations answer questions such as why, when, what and how, while counterfactual explanations answer why not and what if. They actually require different types of logic from humans. Look up possible world semantics if you are interested!

**A brief description of methods.** Now we describe some of the developed methods, following (a reorganized) conceptual framework proposed in [4]. The framework suggests various explanation types based on how people reason and explain.

![1215-2](/img/in-post/1215-2.png)

Source: reference [4]

Easily interpretable models are not our emphasis for this section. Typically, these models include linear models, decision trees, rule-based systems, etc. Explanations are easy both globally and locally, for both factuals and counterfactuals. They are very intuitive for users to understand, but they usually do not hold a guarantee for performance and thus have limited applications in practice.

Black box models are more complicated to handle. *Input-based methods* produce explanations based on the given input. Attribution techniques such as saliency map highlight which part of the input contributes the most to the final prediction. For example, the triangle ears in the image may be the most prominent feature for an AI to determine that it is a cat. Perturbation techniques such as partial dependency plot shows how the AI behavior changes when the input is perturbed in different aspects. For example, keeping other factors fixed, increasing an applicant’s income might cause an AI to believe they are more qualified for a mortgage. *Instance-based methods*, however, do not investigate into the internals of the input, but rather find examples or clusters from the external data that are most significant to the model or the most similar to the given input. This is also helpful in diagnosing deficiencies in training data.

*Model-based methods* focus on the model and are much more flexible. A popular class of methods is to approximate the original black box with an inherently interpretable model, trying to preserve fidelity while increasing interpretability. Examples include LIME that uses local linear model [8], Trepan that builds decision trees [9], and RxREN and DeepRED that extract rules from neural networks [10] [11]. There are also methods that focus on how to interpret features and representations learned by the model, especially for neural networks. Human inspection suggests that hidden layers of an image classification network might be learning edge, color or patterns presented in the images [12]. A creative method of automatic inspection jointly trains the original model with a natural language model which outputs the description of the decision-making process [13]. While this sounds very attractive, the language model might still be facing the same interpretability problem.

## Effects of interpretability

It is certain that interpretability is critical to all communities and there are various methods that have been developed to help. But that is definitely not the end of this line of work. Have these current explanations achieved what we want? How are these interpretations affecting the users? Is it good or bad? Can we improve interpretations based on that? There are so many questions yet to answer. Let’s take a peek from the viewpoint of both the explanation and the user.

**On the explanation end.** Design of explanations can differ in many facets even the explanation method has been fixed. Narayanan et al. [14] varies the length of the explanation, the number and format of cognitive chunks, and the domain the explanation is applied to. Cognitive chunk refers to how the explanation is organized, for example, in the form of succinct rules or a table of similar instances. Subjects are asked to decide whether an explanation matches the model output. They found that users are consistently good at deciding the correctness of an explanation, but their perceived satisfaction can be easily affected by factors other than the explained contents, including the length and the format. This implies that user perception is fairly easy to manipulate regardless of the explanation quality. A simple modification of the presentation format can have a great impact on user’s perceived satisfaction as well.

In another study, Kunkel et al. [15] compared the explanations generated by a recommendation system and by human beings to see which outperforms the other and what needs to improve. Auto-generated explanation uses an instance-based method that produces the most similar item to the user input. Results prove that explanations provided by humans are assessed significantly higher than those by the system, leading to a higher *perceived* recommendation quality and trust as well. They hypothesize that human-generated explanations are presenting interactive social cues to the other end, e.g. “I guess you will like this movie.” Users, on perceiving social presence with another human, are driven to realize social reciprocity, and “this leads to elevated feelings of social exchange and probably also to situational sympathies.” We can see there exist fundamental differences between the explanations generated by the system and by the humans. Incorporating social cues into the language when presenting the explanation might help to improve user trust and satisfaction.

**On the user end.** As discussed, users’ perceived satisfaction and trust can both be affected by the explanations. Not limited to that, explanations are also found to have an effect in users’ mental models and perceived fairness. Users’ mental model learned from the explanation in terms of its fidelity and benefit is impacted more by the completeness of the explanation, i.e. if the *whole* model is explained, than by its soundness, i.e. if the explained part of the model is true [16].

Perceived fairness, however, as a more subjective and high-level concept, has a sophisticated relationship with the presence of interpretations. Based on the COMPAS data, Dodge et al. [17] argue that an effective explanation for fairness is dependent both on the type of fairness issue as well as the user prior beliefs and standpoints. Fairness issues include distributive justice, i.e. if the global results will be unbiased, and procedural justice, i.e. if the local prediction is unbiased, which therefore calls for both global and local explanations. They suggest that the explanation of AI should be personalized to account for individual differences in their fairness positions.

Personal beliefs and cognitive bias can actually persist or amplify through explanations. Confirmation bias is one of the most prevailing biases, where people tend to search for, interpret and recall information in a way that affirms their prior beliefs or hypotheses. This can further cause attitude polarization, belief perseverance, and illusory correlation. In the framework proposed by [4], several common human reasoning errors are described and they could inform the additional goals an AI interpretation should aim for, i.e. to mitigate the cognitive biases. Yet its technical practices and effectiveness are still to be studied.

![1215-3](/img/in-post/1215-3.png)

Source: reference [4]

Finally, we shall discuss another ethical issue underlying these interpretations. The call for an explainable and transparent AI system can have conflicts with some stakeholders’ interests, for example a reluctance for a company to disclose their business secrets. Therefore, such conflicts might result in an explanation that does not actually benefit the users and can turn into *dark patterns* that “purposefully deceive users for the benefit of other parties [18].” Such patterns are not hard to implement as there are many scenarios where users’ perception can be vulnerable when the explanation is deliberately equipped with subtle and sneaky tricks. *Persuasive* explanations are also facing the same issue, where the explanation can be intentionally tuned to increase user trust but does not reflect the actual AI model as accurate as it should. The boundaries of ethics can be blurry. Are we looking for an act utilitarian solution, or a rule utilitarian solution? Awareness of existence of these practices should be promoted, and a fair talk among all the stakeholders is needed so as to provide users with interpretations in a healthy and ethical way. 

## Conclusion

Interpretability of AI systems has become increasingly important in this modern society, and these interpretations are a necessary part for accountability and justification for AI’s social behavior. In this article, we start with the frameworks for interpretable AI systems, including the stakeholders, some desiderata and a touch on the human evaluation. We next describe our taxonomy of current explanation methods, and have briefly introduced some common strategies deployed in practice. We finally present some studies that show how the interpretations can affect users’ perception and what the best practices should be in developing interpretable AI systems.

This field is growing incredibly and we haven’t explored many other topics, including effective evaluations of interpretations, how modality of explanations, e.g. using text or graphics, might affect users, how to practically mitigate human reasoning bias in explanations, ethical discourse on descriptive versus persuasive explanations, and many many more! We will conclude our discussion with a design framework proposed by Mohseni et al. [19] with slight revisions to recap what we have covered so far.


| Design guidelines |
| --- |
| Guideline 1:  Determine system goals by considering stakeholders. |
| Guideline 2:  Decide what to explain by considering factual versus counterfactual. |
| Guideline 3:  Design interpretability techniques by considering appropriate explanation methods. |
| Guideline 4:  Decide how to explain by considering the presentation format. |
| Guideline 5:  Evaluate usefulness by considering comprehensibility, user satisfaction and mental models. |
| Guideline 6:  Evaluate trustworthiness by considering fidelity, user trust and fairness. |

Hopefully one day AI’s will be willing to open their hearts, and we can embrace them wholeheartedly.

### Acknowledgement

Some ideas for organizing this article are borrowed from AAAI 2019 Explainable AI tutorial [20]. 

### References

[1] Angwin J., Larson J., Mattu S., & Kirchner L. (2016). Machine bias. <https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing>.

[2] Preece, A., Harborne, D., Braines, D., Tomsett, R., & Chakraborty, S. (2018). Stakeholders in explainable AI. *arXiv preprint arXiv:1810.00184*.

[3] Weld, D. S., & Bansal, G. (2018). The challenge of crafting intelligible intelligence. *arXiv preprint arXiv:1803.04263.*

[4] Wang, D., Yang, Q., Abdul, A., & Lim, B. Y. (2019, April). Designing Theory-Driven User-Centric Explainable AI. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (p. 601). ACM.

[5] Miller, T., Howe, P., & Sonenberg, L. (2017). Explainable AI: Beware of inmates running the asylum or: How I learnt to stop worrying and love the social and behavioural sciences. *arXiv preprint arXiv:1712.00547*.

[6] Herman, B. (2017). The promise and peril of human evaluation for model interpretability. *arXiv preprint arXiv:1711.07414*.

[7] Gilpin, L. H., Bau, D., Yuan, B. Z., Bajwa, A., Specter, M., & Kagal, L. (2018, October). Explaining explanations: An overview of interpretability of machine learning. In *2018 IEEE 5th International Conference on data science and advanced analytics (DSAA)* (pp. 80-89). IEEE.

[8] Ribeiro, M. T., Singh, S., & Guestrin, C. (2016, August). Why should i trust you?: Explaining the predictions of any classifier. In *Proceedings of the 22nd ACM SIGKDD international conference on knowledge discovery and data mining* (pp. 1135-1144). ACM.

[9] Craven, M., & Shavlik, J. W. (1996). Extracting tree-structured representations of trained networks. In *Advances in neural information processing systems* (pp. 24-30).

[10] Augasta, M. G., & Kathirvalavakumar, T. (2012). Reverse engineering the neural networks for rule extraction in classification problems. *Neural processing letters*, *35*(2), 131-150.

[11] Zilke, J. R., Mencía, E. L., & Janssen, F. (2016, October). DeepRED–Rule extraction from deep neural networks. In *International Conference on Discovery Science* (pp. 457-473). Springer, Cham.

[12]Zeiler, M. D., & Fergus, R. (2014, September). Visualizing and understanding convolutional networks. In *European conference on computer vision* (pp. 818-833). Springer, Cham.

[13] Hendricks, L. A., Akata, Z., Rohrbach, M., Donahue, J., Schiele, B., & Darrell, T. (2016, October). Generating visual explanations. In *European conference on computer vision* (pp. 3-19). Springer, Cham.

[14] Narayanan, M., Chen, E., He, J., Kim, B., Gershman, S., & Doshi-Velez, F. (2018). How do humans understand explanations from machine learning systems? an evaluation of the human-interpretability of explanation. *arXiv preprint arXiv:1802.00682*.

[15] Kunkel, J., Donkers, T., Michael, L., Barbu, C. M., & Ziegler, J. (2019, April). Let Me Explain: Impact of Personal and Impersonal Explanations on Trust in Recommender Systems. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (p. 487). ACM.

[16] Kulesza, T., Stumpf, S., Burnett, M., Yang, S., Kwan, I., & Wong, W. K. (2013, September). Too much, too little, or just right? Ways explanations impact end users' mental models. In *2013 IEEE Symposium on Visual Languages and Human Centric Computing* (pp. 3-10). IEEE.

[17] Dodge, J., Liao, Q. V., Zhang, Y., Bellamy, R. K., & Dugan, C. (2019, March). Explaining models: an empirical study of how explanations impact fairness judgment. In *Proceedings of the 24th International Conference on Intelligent User Interfaces* (pp. 275-285). ACM.

[18] Chromik, M., Eiband, M., Völkel, S. T., & Buschek, D. (2019). Dark Patterns of Explainability, Transparency, and User Control for Intelligent Systems. In *IUI Workshops*.

[19] Mohseni, S., Zarei, N., & Ragan, E. D. (2018). A survey of evaluation methods and measures for interpretable machine learning. *arXiv preprint arXiv:1811.11839*.

[20] Costabello, L., Giannotti, F., Guidotti, R., Hitzler, P., Lécué, F., Minervini, P., & Sarker, K. (2019). On explainable AI: from theory to motivation, applications and limitations. *Tutorial in**AAAI Conference on Artificial Intelligence.* <https://xaitutorial2019.github.io/>.