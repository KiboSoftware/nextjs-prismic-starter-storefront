import React, { useState } from 'react'

import { Stack, Button, MenuItem } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { KiboSelect, KiboDialog } from '@/components/common'
import { useModalContext } from '@/context/ModalContext'
import { useSnackbarContext } from '@/context/SnackbarContext/SnackbarContext'
import { useEditSubscriptionFrequencyMutation } from '@/hooks'
import { subscriptionGetters } from '@/lib/getters'

import type { SbProductPropertyValue } from '@/lib/gql/types'

interface EditSubscriptionFrequencyDialogProps {
  subscriptionId: string
  values: SbProductPropertyValue[]
}

const EditSubscriptionFrequencyDialog = (props: EditSubscriptionFrequencyDialogProps) => {
  const { subscriptionId, values } = props

  const [selectedFrequency, setSelectedFrequency] = useState<string>('')

  const { t } = useTranslation('common')
  const { closeModal } = useModalContext()
  const editSubscriptionFrequency = useEditSubscriptionFrequencyMutation()
  const { showSnackbar } = useSnackbarContext()

  const updateFrequency = async () => {
    const params = {
      subscriptionId,
      frequencyInput: subscriptionGetters.getSubscriptionFrequencyUnit(selectedFrequency),
    }

    await editSubscriptionFrequency.mutateAsync(params)
    closeModal()
    showSnackbar(t('subscription-frequency-updated-successfully'), 'success')
  }

  const handleFrequencyChange = async (name: string, value: string) => setSelectedFrequency(value)

  const Actions = (
    <>
      <Stack gap={2} width="100%">
        <Button
          name="cancel"
          sx={{ width: '100%' }}
          variant="contained"
          color="secondary"
          onClick={() => closeModal()}
        >
          {t('cancel')}
        </Button>
        <Button
          name="confirm"
          sx={{ width: '100%' }}
          variant="contained"
          onClick={updateFrequency}
          disabled={!selectedFrequency}
        >
          {t('confirm')}
        </Button>
      </Stack>
    </>
  )

  return (
    <KiboDialog
      Title={t('edit-subscription-frequency')}
      showCloseButton
      showContentTopDivider={true}
      showContentBottomDivider={true}
      Actions={Actions}
      Content={
        <KiboSelect
          name="selectSubscriptionFrequency"
          onChange={handleFrequencyChange}
          placeholder={t('select-subscription-frequency')}
          value={selectedFrequency}
        >
          {values?.map((value) => {
            return (
              <MenuItem key={value.stringValue} value={`${value.stringValue}`}>
                {`${value.stringValue}`}
              </MenuItem>
            )
          })}
        </KiboSelect>
      }
      customMaxWidth="30rem"
      onClose={closeModal}
    />
  )
}

export default EditSubscriptionFrequencyDialog
