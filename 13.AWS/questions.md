1. What is the diff between root user and the user with admin access in aws?

In **AWS**, both the **root user** and a **user with admin access** have high levels of permissions, but they have key differences in **control, security, and best practices**.  

2. How to get user account number?
User>Name of user> Security Credentials tab> There in console sign in there is account number
---
### **🆚 Root User vs. IAM Admin**
| Feature | Root User | IAM Admin User |
|---------|----------|---------------|
| **Full AWS Access** | ✅ Yes | ✅ Yes |
| **Account & Billing Management** | ✅ Yes | ❌ No |
| **Delete or Close AWS Account** | ✅ Yes | ❌ No |
| **Modify Root User Credentials** | ✅ Yes | ❌ No |
| **Restricted by IAM Policies** | ❌ No | ✅ Yes |
| **Recommended for Daily Use** | ❌ No | ✅ Yes |

---

**How to Access AWS via CLI**
- IAM>Users>ash-users>Security Credentials tab> Access Key> Created and can be save in csv


- Q: Ek User group k pass S3: Full Access and usi k pass ek user group s3: Deny access h
to konsi policy lega ho pehle attach hue thi or allow or deny?
