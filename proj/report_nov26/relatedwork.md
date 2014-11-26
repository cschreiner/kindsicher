---
title: Related Work \#2
author: Chaitanya Achan, Philip Lundrigan, and Christian Schreiner
date: \today
...

- The Basics of Digital: Privacy Simple Tools to Protect your Personal Information and Your Identity Online
- Denny Cherry
- It is a book
- 2014
- Summary: The book discusses general self-protection principles for online browsing and communicating.
- Similarities: The book explains in some detail the reasons why children need online protection until they are grown-up enough to make good privacy and security judgments on their own.
- Differences: This does not talk about the technique of filtering and approving web traffic, which is the focus of this project.

---

- Enhanceing the effectiveness of Web Application Firewalls by generic feature selection
- Hai Thanh Nguyen, Carmen Torrano-Gimenez, Gonzalo Alvarez, Katrin Franke, and Slobodan Petrović
- Conference on Computational Intelligence in Security for Information Systems
- 2012
- Summary: The article is on how to improve the effectiveness of firewalls that are aware of individual web applications.
- Similarities: We are also building a web firewall of sorts.
- Differences: This focuses on automatically identifying web applications. We are interested in manually identifying websites, not necessarily the applications running under them.

----

- Distribution of web traffic toward the centralized cloud firewall system
- Ivan Ivanovic
- RoEduNet International Conference 12th Edition
- 2013
- Summary: The article is about how an access-list based firewalling system can became overwhelmed when the number of people on the Internet at the sponsoring educational institutions exploded, and how the administrators devised a workable replacement
- Similarities: We are building an access-list based firewalling system, which is similar to the system described in the paper.
- Differences: We do not expect to have anywhere near as many (thousands) of users as the educational institutions mentioned in this article.


----

- Slipping in the Window: TCP Reset attacks
- Watson, Paul
- CanSecWest 2004 Security Conference
- 2004
- Summary: This paper is looking at TCP reset attacks. A TCP reset attack is when a third party inserts a TCP reset into a TCP stream. This causes both ends of the TCP connection to close the TCP socket. The paper discusses TCP reset attacks and how to prevent them.
- Similarities: We are planning on using a TCP reset to stop a connection to a blacklisted website. It is the mechanism by which we block website access. It is important for us to know if a TCP reset can be prevented or not.
- Differences: The paper's work is purely about TCP resets whereas we are using TCP resets for a specific purpose.

------

- Exposure to Internet pornography among children and adolescents: A national survey
- Ybarra, Michele L and Mitchell, Kimberly J
- CyberPsychology \& Behavior
- 2005
- Summary: This paper is a study of the exposure of children and teenagers to pornography. It also looks at the effects of having easy access to pornography has on children's lives.
- Similarities: As we are building our system, it is important to understand the behavior of children using the Internet. We need to make sure that our system fits the behaviors of the children that use the Internet today.
- Differences: This paper is just a study and a survey of behavior while our system is actually going to be used by children.
