To connect an **AWS Network Load Balancer (NLB)** with **API Gateway**, follow these steps:

---

## **Step 1: Create an API Gateway HTTP API**
Since **API Gateway (APIGW)** only supports **private integrations** with an NLB via a **VPC Link**, use an **HTTP API** (not REST API).

1. Go to **AWS Console** → **API Gateway**.
2. Click **Create API** → Select **HTTP API**.
3. Configure it with:
   - **Name**: `MyAPI`
   - **Protocol**: HTTP
   - **Integration Type**: Private Integration (this comes later)
4. Click **Create**.

---

## **Step 2: Create a VPC Link for the NLB**
A **VPC Link** allows API Gateway to send traffic to an NLB inside a VPC.

1. Go to **API Gateway** → **VPC Links** → **Create VPC Link**.
2. Set:
   - **Name**: `MyVPCLink`
   - **VPC**: Select your VPC.
   - **Subnets**: Select private subnets where your NLB is deployed.
   - **Security Group**: Ensure it allows traffic from API Gateway.
3. Click **Create** (This takes a few minutes).

---

## **Step 3: Create a Network Load Balancer (NLB)**
If you don’t already have an **NLB**, create one:

1. Go to **EC2** → **Load Balancers** → **Create Load Balancer**.
2. Select **Network Load Balancer**.
3. Configure:
   - **Scheme**: **Internal** (because APIGW needs a private connection).
   - **Listeners**: Add a **TCP listener (port 80 or 443)**.
   - **Target Group**: Create a target group for your backend service (e.g., EC2, ECS).
   - **Register Targets**: Add your API backend (EC2 instances, ECS services, or other private services).
4. Click **Create**.

---

## **Step 4: Connect API Gateway to the NLB**
Now, configure API Gateway to send traffic through the VPC Link.

1. Go to **API Gateway** → Select your **HTTP API**.
2. Click **Routes** → **Create Route**.
   - **Method**: `ANY` or specific (`GET`, `POST`, etc.).
   - **Path**: `/your-endpoint`
3. Click **Create Integration** → **Choose VPC Link**.
4. Select:
   - **Integration Type**: **VPC Link**.
   - **VPC Link**: Select `MyVPCLink`.
   - **NLB DNS Name**: Use the **internal NLB DNS name**.
   - **Port**: Match the NLB listener port (e.g., `80` or `443`).
5. Click **Create**.

---

## **Step 5: Deploy & Test**
1. Click **Deploy**.
2. Copy the **API Gateway Invoke URL**.
3. Test it using **Postman** or `curl`:

   ```sh
   curl -X GET "https://your-api-id.execute-api.region.amazonaws.com/your-endpoint"
   ```

---

## **Notes:**
- Ensure the **NLB and API Gateway** are in the **same VPC** or peered VPCs.
- **Use internal DNS** for the NLB (`*.elb.amazonaws.com`).
- Your **backend (EC2/ECS)** must accept traffic from API Gateway security groups.
- **Enable health checks** on the target group to keep targets healthy.

Would you like help debugging any issues? 🚀