import React from "react";
import Head from "next/head";
import {
    Container,
    Typography,
    Paper,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemText,
    Stack,
    Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PolicyPage: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Policy Page</title>
            </Head>
            <Container maxWidth="lg" style={{ padding: "20px" }}>
                <Typography variant="h3" gutterBottom>
                    Privacy Policy
                </Typography>

                {/* Section 1: Description */}
                <Paper
                    elevation={3}
                    style={{ padding: "20px", marginBottom: "20px" }}
                >
                    <Typography variant="h4" gutterBottom>
                        {`1. Information We Collect`}
                    </Typography>
                    <Typography variant="h6">
                        {`1.1 Personal Information`}
                    </Typography>
                    <Typography paragraph>
                        {`We may collect personal information when you use our
                        services. This includes, but is not limited to, the
                        following:`}
                    </Typography>
                    <Stack direction="row" spacing={2} paddingLeft={4}>
                        <ul>
                            <li>
                                <Typography paragraph>
                                    {`Contact Information: such as your name,
                                    email address, phone number, and mailing
                                    address.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Payment Information: when you make a
                                    transaction with us, we collect payment
                                    details, which may include credit card
                                    information.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Travel Details: including itinerary, travel
                                    preferences, and booking history.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Communication Data: any information you
                                    provide when contacting our customer support
                                    or through other communication channels.`}
                                </Typography>
                            </li>
                        </ul>
                    </Stack>
                    <Typography variant="h6">
                        {`1.2 Usage and Technical Information`}
                    </Typography>
                    <Typography paragraph>
                        {`We also collect non-personal information related to your
                        interactions with our platform, such as:`}
                    </Typography>
                    <Stack direction="row" spacing={2} paddingLeft={4}>
                        <ul>
                            <li>
                                <Typography paragraph>
                                    {`Device Information: including your device
                                    type, IP address, browser type, and
                                    operating system.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Device Information: including your device
                                    type, IP address, browser type, and
                                    operating system.`}
                                </Typography>
                            </li>
                        </ul>
                    </Stack>
                    <Typography variant="h4" gutterBottom>
                        {`2. How We Use Your Information`}
                    </Typography>
                    <Typography paragraph>
                        {`We use the information collected for various purposes,
                        including:`}
                    </Typography>
                    <Stack direction="row" spacing={2} paddingLeft={4}>
                        <ul>
                            <li>
                                <Typography paragraph>
                                    {`Providing Services: to process bookings,
                                    manage transport logistics, and facilitate
                                    ticket purchases.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Customer Support: to respond to inquiries,
                                    resolve issues, and provide assistance.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Personalization: to enhance your experience
                                    and provide you with tailored content and
                                    recommendations.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Security: to protect against fraudulent or
                                    unauthorized activities.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Legal Obligations: to comply with legal
                                    requirements and regulations.`}
                                </Typography>
                            </li>
                        </ul>
                    </Stack>
                    <Typography variant="h4" gutterBottom>
                        {`3. Information Sharing`}
                    </Typography>
                    <Typography paragraph>
                        {`We do not sell, trade, or rent your personal information
                        to third parties for their marketing purposes. However,
                        we may share your data with:`}
                    </Typography>
                    <Stack direction="row" spacing={2} paddingLeft={4}>
                        <ul>
                            <li>
                                <Typography paragraph>
                                    {`Service Providers: to facilitate payment
                                    processing, customer support, and other
                                    essential functions.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Partners: when necessary to provide
                                    integrated services, such as transportation
                                    providers.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Legal Requirements: to comply with legal
                                    obligations or respond to law enforcement
                                    requests.`}
                                </Typography>
                            </li>
                        </ul>
                    </Stack>
                    <Typography variant="h4" gutterBottom>
                        {`4. Security Measures`}
                    </Typography>
                    <Typography paragraph>
                        {`We take security seriously and employ industry-standard
                        measures to protect your data from unauthorized access,
                        disclosure, alteration, or destruction. This includes
                        encryption, access controls, and regular security
                        assessments.`}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        {`5. Your Choices and Rights`}
                    </Typography>
                    <Typography paragraph>
                        {`You have the following rights regarding your personal
                        information:`}
                    </Typography>
                    <Stack direction="row" spacing={2} paddingLeft={4}>
                        <ul>
                            <li>
                                <Typography paragraph>
                                    {`Access: You can request access to the
                                    personal information we hold about you.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Correction: You can request corrections or
                                    updates to your personal information.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Deletion: You can request the deletion of
                                    your personal information, subject to legal
                                    and contractual requirements.`}
                                </Typography>
                            </li>
                            <li>
                                <Typography paragraph>
                                    {`Opt-Out: You can opt out of marketing
                                    communications at any time.`}
                                </Typography>
                            </li>
                        </ul>
                    </Stack>
                    <Typography variant="h4" gutterBottom>
                        {`6. Data Retention`}
                    </Typography>
                    <Typography paragraph>
                        {`We retain your personal information for as long as
                        necessary to provide our services and fulfill legal
                        obligations.`}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        {`7. Updates to Privacy Policy`}
                    </Typography>
                    <Typography paragraph>
                        {`We may update this Privacy Policy periodically. You will
                        be notified of any significant changes, and the updated
                        policy will be posted on our website.`}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        {` 8. Contact Us`}
                    </Typography>
                    <Typography paragraph>
                        {`If you have any questions or concerns regarding this
                        Privacy Policy or your personal information, please
                        contact us at [triptix.sfz@gmail.com].`}
                    </Typography>
                    <Typography paragraph>
                        {`By using Triptix's services, you consent to the terms
                        outlined in this Privacy Policy. Your continued use of
                        our services signifies your acceptance of any updates or
                        changes to this policy.`}
                    </Typography>
                </Paper>

                {/* Section 2: FAQ Section */}
                <Paper
                    elevation={3}
                    style={{ padding: "20px", marginBottom: "20px" }}
                >
                    <Typography variant="h4" gutterBottom>
                        {`FAQ Section`}
                    </Typography>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{`Question 1: How do I book tickets through Triptix?`}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {`To book tickets through Triptix, simply follow these steps:
            1. Sign in to your Triptix account or create a new one.
            2. Enter your travel details, including the destination and date.
            3. Browse available transportation options and select your preferred one.
            4. Review your booking details and make the payment.
            5. Once payment is confirmed, you will receive a confirmation email with your ticket details.`}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>{`Question 2: Is my personal information secure with Triptix?`}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {`Yes, your personal information is highly secure with Triptix. We use advanced encryption and security measures to protect your data. We do not share your information with third parties without your consent. For more details, please refer to our Privacy Policy.`}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>{`Question 3: Can I modify or cancel my booking?`}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {`Yes, you can modify or cancel your booking, subject to the policies of the transportation provider. Log in to your Triptix account, go to your bookings, and follow the provided options for modifications or cancellations. Please note that there may be cancellation fees depending on the provider's policy.`}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                        >
                            <Typography>{`Question 4: How do I contact Triptix customer support?`}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {`You can reach our friendly customer support team by emailing us at support@triptix.com or by calling our 24/7 helpline at +123-456-7890. We are here to assist you with any inquiries or issues you may have.`}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Paper>

                {/* Section 3: Key Notes */}
                <Paper elevation={3} style={{ padding: "20px" }}>
                    <Typography variant="h4" gutterBottom>
                        {`Key Notes`}
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Note 1: Triptix streamlines ticket booking and transport management for effortless journeys." />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="Note 2: Founded by BUET CSE alumni, our platform combines technical excellence with transport convenience." />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="Note 3: Three friends turned a term assignment into a cutting-edge solution for travelers." />
                        </ListItem>
                    </List>
                </Paper>
            </Container>
        </div>
    );
};

export default PolicyPage;
