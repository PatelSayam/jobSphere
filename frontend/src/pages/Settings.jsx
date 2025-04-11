import { useState } from "react"

const Settings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    instituteName: "Dharamsinh Desai University (IT)",
    instituteWebsite: "ddu.ac.in",
    placementOfficerName: "Prof. Viral Shah",
    placementOfficerEmail: "placement@ddit.edu",
    placementOfficerPhone: "+91 9876543210",
    academicYear: "2023-2024",
  })

  const [emailSettings, setEmailSettings] = useState({
    emailNotifications: true,
    studentApplicationNotification: true,
    companyRegistrationNotification: true,
    placementUpdateNotification: true,
    emailSignature: "Regards,\nPlacement Cell\nDharamsinh Desai University (IT)",
  })

  const [placementSettings, setPlacementSettings] = useState({
    allowMultipleOffers: false,
    minimumCGPA: "6.0",
    maximumActiveBacklogs: "0",
    allowPlacementBreak: true,
    placementBreakDuration: "6 months",
  })

  const [accessSettings, setAccessSettings] = useState({
    enableStudentRegistration: true,
    enableCompanyRegistration: true,
    moderateCompanyPostings: true,
    studentProfileApproval: true,
  })

  const handleGeneralSettingsChange = (e) => {
    const { name, value } = e.target
    setGeneralSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleEmailSettingsChange = (e) => {
    const { name, value, type, checked } = e.target
    setEmailSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handlePlacementSettingsChange = (e) => {
    const { name, value, type, checked } = e.target
    setPlacementSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleAccessSettingsChange = (e) => {
    const { name, checked } = e.target
    setAccessSettings((prev) => ({ ...prev, [name]: checked }))
  }

  const saveSettings = (settingType) => {
    // In a real app, this would be an API call
    // PUT /api/settings/{settingType}
    alert(`${settingType} settings saved successfully!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-500">Configure system settings and preferences</p>
        </div>

        <div className="space-y-8">
          {/* General Settings */}
          <div className="bg-white rounded-xl shadow-md border border-indigo-100 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">General Settings</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Institute Name</label>
                  <input
                    type="text"
                    name="instituteName"
                    value={generalSettings.instituteName}
                    onChange={handleGeneralSettingsChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Institute Website</label>
                  <input
                    type="url"
                    name="instituteWebsite"
                    value={generalSettings.instituteWebsite}
                    onChange={handleGeneralSettingsChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Placement Officer Name</label>
                  <input
                    type="text"
                    name="placementOfficerName"
                    value={generalSettings.placementOfficerName}
                    onChange={handleGeneralSettingsChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Placement Officer Email</label>
                  <input
                    type="email"
                    name="placementOfficerEmail"
                    value={generalSettings.placementOfficerEmail}
                    onChange={handleGeneralSettingsChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Placement Officer Phone</label>
                  <input
                    type="tel"
                    name="placementOfficerPhone"
                    value={generalSettings.placementOfficerPhone}
                    onChange={handleGeneralSettingsChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Academic Year</label>
                  <input
                    type="text"
                    name="academicYear"
                    value={generalSettings.academicYear}
                    onChange={handleGeneralSettingsChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => saveSettings("General")}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors"
                >
                  Save General Settings
                </button>
              </div>
            </div>
          </div>

          {/* Email Settings */}
          <div className="bg-white rounded-xl shadow-md border border-indigo-100 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Email Notifications</h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="emailNotifications"
                    name="emailNotifications"
                    checked={emailSettings.emailNotifications}
                    onChange={handleEmailSettingsChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-700">
                    Enable Email Notifications
                  </label>
                </div>

                <div className="pl-6 space-y-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="studentApplicationNotification"
                      name="studentApplicationNotification"
                      checked={emailSettings.studentApplicationNotification}
                      onChange={handleEmailSettingsChange}
                      disabled={!emailSettings.emailNotifications}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded disabled:opacity-50"
                    />
                    <label
                      htmlFor="studentApplicationNotification"
                      className="ml-2 block text-sm text-gray-700 disabled:opacity-50"
                    >
                      Student Application Notifications
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="companyRegistrationNotification"
                      name="companyRegistrationNotification"
                      checked={emailSettings.companyRegistrationNotification}
                      onChange={handleEmailSettingsChange}
                      disabled={!emailSettings.emailNotifications}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded disabled:opacity-50"
                    />
                    <label
                      htmlFor="companyRegistrationNotification"
                      className="ml-2 block text-sm text-gray-700 disabled:opacity-50"
                    >
                      Company Registration Notifications
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="placementUpdateNotification"
                      name="placementUpdateNotification"
                      checked={emailSettings.placementUpdateNotification}
                      onChange={handleEmailSettingsChange}
                      disabled={!emailSettings.emailNotifications}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded disabled:opacity-50"
                    />
                    <label
                      htmlFor="placementUpdateNotification"
                      className="ml-2 block text-sm text-gray-700 disabled:opacity-50"
                    >
                      Placement Update Notifications
                    </label>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <label className="block text-sm font-medium text-gray-700">Email Signature</label>
                  <textarea
                    name="emailSignature"
                    value={emailSettings.emailSignature}
                    onChange={handleEmailSettingsChange}
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => saveSettings("Email")}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors"
                >
                  Save Email Settings
                </button>
              </div>
            </div>
          </div>

          {/* Placement Settings */}
          <div className="bg-white rounded-xl shadow-md border border-indigo-100 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Placement Rules</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="allowMultipleOffers"
                      name="allowMultipleOffers"
                      checked={placementSettings.allowMultipleOffers}
                      onChange={handlePlacementSettingsChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="allowMultipleOffers" className="ml-2 block text-sm text-gray-700">
                      Allow Students to Accept Multiple Offers
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Minimum CGPA Required</label>
                  <input
                    type="text"
                    name="minimumCGPA"
                    value={placementSettings.minimumCGPA}
                    onChange={handlePlacementSettingsChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Maximum Active Backlogs Allowed</label>
                  <input
                    type="text"
                    name="maximumActiveBacklogs"
                    value={placementSettings.maximumActiveBacklogs}
                    onChange={handlePlacementSettingsChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="allowPlacementBreak"
                      name="allowPlacementBreak"
                      checked={placementSettings.allowPlacementBreak}
                      onChange={handlePlacementSettingsChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="allowPlacementBreak" className="ml-2 block text-sm text-gray-700">
                      Allow Placement Break
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Placement Break Duration</label>
                  <input
                    type="text"
                    name="placementBreakDuration"
                    value={placementSettings.placementBreakDuration}
                    onChange={handlePlacementSettingsChange}
                    disabled={!placementSettings.allowPlacementBreak}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50 disabled:bg-gray-100"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => saveSettings("Placement")}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors"
                >
                  Save Placement Rules
                </button>
              </div>
            </div>
          </div>

          {/* Access Control Settings */}
          <div className="bg-white rounded-xl shadow-md border border-indigo-100 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Access Control</h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="enableStudentRegistration"
                    name="enableStudentRegistration"
                    checked={accessSettings.enableStudentRegistration}
                    onChange={handleAccessSettingsChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="enableStudentRegistration" className="ml-2 block text-sm text-gray-700">
                    Enable Student Registration
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="enableCompanyRegistration"
                    name="enableCompanyRegistration"
                    checked={accessSettings.enableCompanyRegistration}
                    onChange={handleAccessSettingsChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="enableCompanyRegistration" className="ml-2 block text-sm text-gray-700">
                    Enable Company Registration
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="moderateCompanyPostings"
                    name="moderateCompanyPostings"
                    checked={accessSettings.moderateCompanyPostings}
                    onChange={handleAccessSettingsChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="moderateCompanyPostings" className="ml-2 block text-sm text-gray-700">
                    Moderate Company Job Postings
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="studentProfileApproval"
                    name="studentProfileApproval"
                    checked={accessSettings.studentProfileApproval}
                    onChange={handleAccessSettingsChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="studentProfileApproval" className="ml-2 block text-sm text-gray-700">
                    Require Student Profile Approval
                  </label>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => saveSettings("Access")}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors"
                >
                  Save Access Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
