---
templateKey: blog-post
title: "Bykea: An affordable carpool solution for office bound workers"
date: 2024-04-23T10:13:34.245Z
featuredpost: true
featuredimage: /img/carpool-car-sticker-2.jpg
---
## Background

Founded in 2016, Bykea has become  Pakistan’s most celebrated ride-hailing solution offering low fares for commuters in Karachi, Lahore and Islamabad. It has earned its reputation as a major success story in the country’s startup ecosystem, providing affordable technology solutions that create economic opportunities, while addressing rampant challenges in the transportation and logistics sectors of the country.
The Challenge

With rising fuel prices and costs of living and more women entering the workforce, carpooling and slugging has become a growing practice. Bykea discovered an opportunity to digitize the offline behavior of a monthly pick and drop subscription through pooling passengers together as they commute to and from work/educational institutes.

This market already exists offline where people have a monthly ‘pick & drop service’ typically in a microvan but also cars now to shuttle commuters especially working women and schoolchildren. Drivers and passengers perform all communication via WhatsApp groups. 

This model has also been tested offline by Bykea using Whatsapp, Facebook and manual matchmaking with a high interest from customers which can only be fulfilled by productizing and automating the matchmaking processes.  

Besides that, our goal was to grow car penetration in Karachi by matching office bound employees with 30% cheaper fares possible via carpooling.

### My Role

As one of the two product designers in the team, my task was to design the entire customer view of the app. I was responsible for mapping out the user journey, wireframing, product design, visual design, information hierarchy and user testing of the customer-facing app. 

The other designer in the team worked on the Partner app, how drivers aka Partners can find carpooling jobs, accept payments and then pick and drop customers to their respective destinations for one month.

### Tools

Figma, Google Docs, Google Spreadsheets

### Duration

10 months (May 2023 to Jan 2024)

## Acceptance criteria

When I got hired by Bykea in 2023, I was tasked to work on this new upcoming vertical. From the get-go, I got down with my product manager, head of product and examined how a carpooling service would work in Pakistan.

We identified probable user journeys, touch-points and edge cases and the customers’ motivation and possible emotions experienced through those stages. We interviewed Bykea customers, notably young women between the ages of 20 and 26 that utilized carpooling services. 

We explored other carpooling apps i.e. BlaBlaCars and Yandex (operating in Kazakhstan and Uzbekistan) to understand the solicitation process.

After three months of intensive product discovery we laid down the refined customer and partner journeys.

<ul>
<li>A customer should be able to provide the following details when creating a booking:
<li>Either select one-way or two-way. One way will not have a drop-off time.</li>
<li>Daily pickup and dropoff points.</li>
<li>Select start date of the entire batch.</li>
<li>Time to get to office and time to be picked up from office and vice versa.</li>
<li>Gender preference - the customer can choose whether he or she wants a mixed or an all-male or an all-female booking, being mindful of the cultural and patriarchal norms in our society.</li>
<li>Vehicle / AC preference.</li>
<li>Number of passengers in this booking.</li>
<li>An ability to place a gross booking and then see the offers for the interested drivers.</li>
<li>Ability to cancel all offers, ignore specific offers, or accept a specific offer.</li>
<li>Ability to make a payment once the customer has selected an offer.</li>
<li>Ability to make partial payment: I stressed that customers should have the offer to make a partial payment in case if they are not satisfied with the service and wish to cancel it.</li>
<li>Ability to make full payment (why would they do this? - maybe a slight discount?).</li>
<li>Ability to use cards/telco wallet/ IBFT to make the payment.</li>
<li>Ability to receive a refund if the trip has a genuine cancellation, or a partial refund if the trip has an arbitrary cancellation.</li>
<li>Ability to view the summary once the payment has been made, contact the driver and view the schedule.</li>
<li>Mark days which they do not want the service on.</li>
<li>See if the driver has marked themselves unavailable for a specific day.</li>
<li>Ability to see if the driver is on the way once the booking date arrives, and for each subsequent booking too.</li>
<li>Ability to see if a driver cancels.</li>
<li>Ability to get an alternate on demand driver for the entire group.</li>
<li>Ability to cancel the trip and not be charged if the usual driver is not available.</li>
<li>Ability to request a new driver if the driver marks accept but does not show up.</li>
<li>No fees are charged to users or drivers when they bid or counter offer. Only when a customer makes a payment and it is confirmed (IBFT will not be instant) by Bykea’s admin will trigger a charge of the commission to the driver. A driver who does not have enough balance in their wallet need to be told to deposit money to be able to have enough money to accept 4 passengers and pay Bykea the 13% commission in advance.</li> 
<li>We needed to build the capability for the driver to send money to Bykea via IBFT as well, similar to how are for the customer.</li>
</ul>

And of course, there will be an Urdu version of this.

## Information Architecture, Key Features & Visual Design

Our observation was other apps have split the solicitation process into segments and provided a plethora of features. 

<ul>
<li>Separate screens for pickup, dropoff, timings, payment</li>
<li>Instructions for drivers</li> 
<li>Enabling live location and notifications</li>
<li>Extra luggage</li> 
<li>Tipping</li>
</ul>

We were aware of developing a service from scratch and agreed to a boilerplate MVP and any additional features will be considered in the second phase. After intense feedback from stakeholders, the final carpool lead generation screen was designed.

The marketing team designed a dedicated set of vector icons for the vehicle categories.

![](/img/lead-generation-screen-explained-2.jpg)

## Customer journey

In four months, the design of the customer app for Carpool was finalized and ready for development.

![Lead Generation screen of Bykea Carpool](/img/user-journey-1.jpg)

![](/img/user-journey-2.jpg)

![](/img/user-journey-2-2.jpg "The Summary screen  - Carpool users")

![](/img/user-journey-3.jpg "In-Trip Screens - Bykea Carpool")

## Getting feedback from users

We tested out the prototype by inviting customers of various age groups and professions, including students and working professionals of both genders. We conducted usability testing sessions as well as handed them surveys.

After two sessions this was the feedback shared by users:

<ul>
<li>They understood what office timings meant.</li>
<li>They did not understand what the map pick and drop pins were - took them time to understand green was pick up and purple was drop off (used to the old UI).</li>
<li>They said they would use IBFT rather than topping up their wallet via card.</li>
<li>They initially felt the process was very lengthy but then understood that first time they would have to fill in details and after that they would have to renew their payment for the next month - however, if they wanted to change details i.e. timings or location, they would have to make a new booking.</li>
<li>They mentioned if they liked the driver they should be able to request a time change, however understood that that driver may not be available for that time slot.</li>
<li>They would like to see Partner's reviews and ratings as well.</li>
<li>They prefer single booking rather than request a booking for the whole batch when the partner is late or didn't show up.</li>
<li>They would like to see other Co-passengers profile as well when travelling with both male & female option.</li>
<li>They would like to see the ETA from the other co-passengers when driver is picking up other passengers.</li>
</ul>

![](/img/testing-session-1.jpg)

W﻿e compiled all of their feedback on a Google Spreadsheet

![](/img/testing-session-survey.jpg)

## Learnings

I got the opportunity to contribute to this project from end-to-end. Started from its inception and strategy phase and then went on to see it through to its launch. I learnt how long and it takes for a project from initial iteration to validating user feedback, from aligning stakeholders to assembling teams internally, and going from production to development to final release. 

As a product designer I had to be hot on the heels working cross-functionally with product managers, the operations team managing cars and rickshaw verticals and the engineers. 

Post-release, we discovered that the technical implementation resulted in issues of font and vector being out of size and increasing loading times. I worked closely with the engineers to mitigate this issue.

## Outcomes

Bykea’s carpool service offering continues to make steady progress and conversions from gross booking between January and April 2024 stood at 6%. Bykea plans to expand its scope and introduce new features such as special instructions for drivers, sharing live location, manage notifications, tipping and ads for cross sell or external consumption.