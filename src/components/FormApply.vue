<template>
  <form action="" class="py-5 grid gap-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
      <span class="col-span-full text-sm mb-6 uppercase text-orange-500 text-center">Personal Details</span>
      <form-input :name="'fname'" :label="'First Name'" :type="'text'"></form-input>
      <form-input :name="'lname'" :label="'Last Name'" :type="'text'"></form-input>
      <form-input :name="'email'" :label="'Email'" :type="'email'"></form-input>
      <form-input :name="'phone'" :label="'Phone'" :type="'tel'"></form-input>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
      <form-input :name="'address'" :label="'Street Address'" :type="'text'"></form-input>
      <form-input :name="'postcode'" :label="'Post Code'" :type="'text'"></form-input>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-x-4">
      <form-input :name="'DOB'" :label="'Date of Birth'" :type="'text'"></form-input>
      <form-input :name="'license'" :label="'License #'" :type="'text'"></form-input>
      <form-input :name="'Expiry'" :label="'License Expiry'" :type="'text'"></form-input>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3  gap-x-4">
      <span class="col-span-full text-sm mb-6 uppercase text-orange-500 text-center">Vehicle Details</span>
      <form-input :name="'make'" :label="'Make'" :type="'text'"></form-input>
      <form-input :name="'model'" :label="'Model'" :type="'text'"></form-input>
      <form-select :name="'year'" :label="'Year'" :options="years"></form-select>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3  gap-x-4">
      <form-input :name="'rego'" :label="'Rego #'" :type="'text'"></form-input>
      <form-input :name="'kms'" :label="'Km\'s'" :type="'text'"></form-input>
      <form-select class="col-span-full sm:col-span-1" :name="'condition'" :label="'Condition'" :options="conditions"></form-select>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3  gap-x-4">
      <form-select :name="'transmission'" :label="'Transmission'" :options="transmissions"></form-select>
      <form-select :name="'fuel'" :label="'Fuel Type'" :options="fuel"></form-select>
      <form-select class="col-span-full sm:col-span-1" :name="'vtype'" :label="'Type of Vehicle'" :options="vtypes"></form-select>
    </div>
    <!-- <form-select :name="'loanamount'" :label="'Requested Loan Amount'" :options="amounts"></form-select> -->
    <div class="w-full flex flex-col relative my-4">
      <input class="accent-orange-500 peer" type="range" name="amount" id="amount" min="5000" max="100000" step="2500" v-model="form.amount">
      <label for="amount" class="px-1 pointer-events-none absolute left-0 -top-8 text-gray-400 text-sm transition-all peer-focus:text-orange-400 peer-hover:text-orange-400">Requested Loan Amount: <span class="text-base text-stone-800">${{form.amount.toLocaleString()}}</span></label>
    </div>

    <div class="flex flex-col gap-2">
      <label for="statusaccept" class="grid grid-flow-col gap-3 items-center col-span-full">
        <input type="checkbox" name="statusaccept" id="statusaccept" class="accent-orange-600 scale-[1.25]">
        <span class="text-sm italic tracking-tight leading-tight font-light">My vehicle is unencumbered, registered and in a roadworthy condition</span>
      </label>
      <label for="securityaccept" class="grid grid-flow-col gap-3 items-center">
        <input type="checkbox" name="securityaccept" id="securityaccept" class="accent-orange-600 scale-[1.25]">
        <span class="text-sm italic tracking-tight leading-tight font-light">I understand and accept that my vehicle will be held by PawnHub as security for the term of the loan</span>
      </label>
    </div>
    <button @click.prevent="openCloudWidget" class="flex border rounded-lg h-10 items-center justify-between">
      <span class="px-2 text-stone-400">Optional - Image Upload</span>
      <div class="bg-orange-500 rounded-r-lg text-white h-full w-10 flex justify-center items-center text-lg"><i class="fal fa-cloud-upload"></i></div>
    </button>
    <button @click.prevent="sendmail" class="mt-4 bg-orange-500 shadow-lg shadow-orange-500/30 py-2 transition duration-500 hover:-translate-y-1 ease-out text-white rounded hover:bg-orange-400">SUBMIT</button>
  </form>
</template>

<script>
  import FormInput from '@/components/FormInput.vue'
  import FormSelect from '@/components/FormSelect.vue'
  export default {
    components: {
      FormInput,
      FormSelect
    },
    data() {
      return {
        uid: Date.now(),
        conditions: [
          'As New', 'Excellent', 'Above Average', 'Good', 'Fair', 'Poor', 'Unroadworthy'
          ],
        transmissions: [
          'Automatic', 'Manual', 'Sequential'
          ],
        fuel: [
          'Petrol', 'Diesel', 'Hybrid', 'Electric'
          ],
        vtypes: [
          'Sedan 4-door', 'Coupe 2-door', 'Wagon', 'Hatch 5-door', 'Hatch 3-door', 'SUV', '4WD', 'Single Cab Ute', 'Dual Cab Ute', 'Van', 'Truck', 'Other'
          ],
        years: [
          "'22","'21","'20","'19","'18","'17","'16","'15","'14","'13","'12","'11","'10","'09","'08","'07","'06","'05","'04","'03","'02","'01","'00","'99","'98","'97","'96","'95","'94","'93","'92","'91","'90","'89","'88","'87","'86","'85","'84","'83","'82","'81","'80","'79","'78","'77","'76","'75","'74","'73","'72","'71","'70","'69","'68","'67","'66","'65","'64","'63","'62","'61","'60","'59","'58","'57","'56","'55","'54","'53","'52","'51","'50"
        ],
        form: {
          amount: 10000
        },
        uploadresults: [],
      }
    },
    mounted() {
      // this.ofAge()
    },
    methods: {
      ofAge() {
        let year = new Date().getFullYear() - 18
        let theDate = new Date(year, 0, 1)
        console.log(theDate)
      },
      openCloudWidget() {
        window.cloudinary.openUploadWidget({
            cloud_name: 'pawnhub',
            api_key: '359154961791498',
            upload_preset: 'oonqzby5',
            sources: ['camera', 'local'],
            default_source: 'local',
            multiple: true,
            folder: 'application_uploads/' + this.uid
          },
          (error, result) => {
            if (!error && result && result.event === "success") {
              this.uploadresults.push(result.info) 
            }
          })
      },
      sendmail() {
        var body = "a string";
        var requestOptions = {
          method: 'POST',
          body: body,
          redirect: 'follow'
        };
        fetch(import.meta.env.VITE_HOST + "/.netlify/functions/sendmail", requestOptions)
          .then(response => response.text())
          .then(result => {
            let res = JSON.parse(result)
            console.log(res)
          })
          .catch(error => {
            console.log('failed to submit: ', error)
          });
      }
    }
  }
</script>

<style scoped>
</style>